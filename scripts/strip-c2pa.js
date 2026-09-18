#!/usr/bin/env node
// scripts/strip-c2pa.js
//
// Strip C2PA Content Credentials (the "AI provenance" manifest) from SVG files.
//
// Usage:
//   node scripts/strip-c2pa.js [options] <file.svg> [file2.svg ...]
//
// Options:
//   -w, --write     Edit files in place (default: single file → stdout)
//   -n, --dry-run   Report what would be removed; write nothing
//   -v, --verbose   Print details, including files that had nothing to strip
//   -h, --help      Show this message
//
// What it removes:
//   1. The <c2pa:manifest>…</c2pa:manifest> element inside <metadata>
//      (self-closing form included).
//   2. The enclosing <metadata> block if it is left empty or whitespace-only.
//   3. The xmlns:c2pa="…" namespace declaration from the root <svg> element.
//
// What it does NOT touch:
//   - Other <metadata> content (Dublin Core, RDF, etc.), which is left intact.
//   - The rest of the SVG, including whitespace, attributes, and any unrelated
//     namespaces.
//
// Notes:
//   - If multiple files are given, --write or --dry-run is required, since
//     concatenating multiple SVGs to stdout is almost never what you want.
//   - Shell globs work fine (the shell expands them); pass '*.svg' quoted if
//     you want the script itself to see the pattern and error out.

import fs from 'fs';
import path from 'path';

const HELP = `
Strip C2PA Content Credentials metadata from SVG files.

Usage:
  node scripts/strip-c2pa.js [options] <file.svg> [file2.svg ...]

Options:
  -w, --write     Edit files in place (default: single file is written to stdout)
  -n, --dry-run   Report what would be removed; do not write anything
  -v, --verbose   Print details, including files that had nothing to strip
  -h, --help      Show this message

Exit codes:
  0  Success
  1  Usage error
  2  File error
`.trimStart();

/**
 * Remove C2PA metadata from a single SVG string.
 *
 * @param {string} svg - The raw SVG source.
 * @param {{ verbose?: boolean }} [opts]
 * @returns {{ cleaned: string, notes: string[] }}
 */
function stripC2PA(svg, opts = {}) {
	let out = svg;
	const notes = [];

	// Quick bailout: if there is no c2pa trace at all, do nothing. This avoids
	// accidentally matching a legitimate <manifest> element in an unrelated
	// namespace (which would be wrong and destructive).
	const hasC2PA =
		/xmlns:c2pa\s*=/i.test(svg) ||
		/<c2pa:manifest\b/i.test(svg) ||
		/c2pa\.org\/manifest/i.test(svg);

	if (!hasC2PA) {
		return { cleaned: svg, notes };
	}

	// 1. Remove <c2pa:manifest>…</c2pa:manifest> and any self-closing variant.
	//    Base64 content cannot contain '<' or '>', so the non-greedy match is
	//    safe. Case-insensitive to tolerate odd producers.
	{
		const before = out.length;
		out = out.replace(
			/<c2pa:manifest\b[^>]*\/>|<c2pa:manifest\b[^>]*>[\s\S]*?<\/c2pa:manifest\s*>/gi,
			'',
		);
		const removed = before - out.length;
		if (removed > 0) {
			notes.push(`removed <c2pa:manifest> (${removed} chars)`);
		}
	}

	// 2. Remove <metadata>…</metadata> only if it is now empty or whitespace-only.
	//    This preserves any non-C2PA metadata a producer may have written.
	{
		const before = out.length;
		out = out.replace(/<metadata\b[^>]*>\s*<\/metadata\s*>/gi, '');
		if (out.length < before) {
			notes.push('removed empty <metadata> block');
		}
	}

	// 3. Remove the xmlns:c2pa declaration from the root <svg> element.
	//    (Also matches xmlns:c2pa2 etc., in case a producer used a numeric
	//    suffix to disambiguate, which happens in hand-edited files.)
	{
		const before = out.length;
		out = out.replace(/\s+xmlns:c2pa\d*\s*=\s*("[^"]*"|'[^']*')/gi, '');
		if (out.length < before) {
			notes.push('removed xmlns:c2pa declaration');
		}
	}

	return { cleaned: out, notes };
}

function processFile(file, opts) {
	let raw;
	try {
		raw = fs.readFileSync(file, 'utf-8');
	} catch (err) {
		process.stderr.write(`✗ ${file}: ${err.message}\n`);
		process.exitCode = 2;
		return;
	}

	const { cleaned, notes } = stripC2PA(raw, opts);

	if (notes.length === 0) {
		if (opts.verbose) process.stdout.write(`· ${file}: nothing to strip\n`);
		// Still emit the original if streaming to stdout, so shell pipelines
		// behave predictably.
		if (!opts.write && !opts.dryRun) process.stdout.write(cleaned);
		return;
	}

	if (opts.dryRun) {
		process.stdout.write(`→ ${file}: would remove — ${notes.join('; ')}\n`);
		return;
	}

	if (opts.write) {
		try {
			fs.writeFileSync(file, cleaned, 'utf-8');
		} catch (err) {
			process.stderr.write(`✗ ${file}: ${err.message}\n`);
			process.exitCode = 2;
			return;
		}
		if (opts.verbose) {
			process.stdout.write(`✓ ${file}: ${notes.join('; ')}\n`);
		} else {
			process.stdout.write(`✓ ${file} updated\n`);
		}
		return;
	}

	// Single file, no --write: stream cleaned SVG to stdout.
	// Diagnostics (if any) go to stderr so they don't corrupt the output.
	if (opts.verbose) {
		process.stderr.write(`→ ${file}: ${notes.join('; ')}\n`);
	}
	process.stdout.write(cleaned);
}

(function main() {
	const argv = process.argv.slice(2);

	if (argv.length === 0 || argv.includes('-h') || argv.includes('--help')) {
		process.stdout.write(HELP);
		process.exit(argv.length === 0 ? 1 : 0);
	}

	const opts = {
		write: argv.includes('-w') || argv.includes('--write'),
		dryRun: argv.includes('-n') || argv.includes('--dry-run'),
		verbose: argv.includes('-v') || argv.includes('--verbose'),
	};

	// Everything that isn't a flag is a file path. A literal '--' separator
	// lets a filename begin with '-' if needed.
	let files = [];
	let seenDashDash = false;
	for (const a of argv) {
		if (a === '--') {
			seenDashDash = true;
			continue;
		}
		if (!seenDashDash && a.startsWith('-')) continue;
		files.push(a);
	}

	if (files.length === 0) {
		process.stderr.write('Error: no input files. See --help.\n');
		process.exit(1);
	}

	if (opts.write && opts.dryRun) {
		process.stderr.write('Error: --write and --dry-run are mutually exclusive.\n');
		process.exit(1);
	}

	if (files.length > 1 && !opts.write && !opts.dryRun) {
		process.stderr.write(
			'Error: refusing to concatenate multiple files to stdout. Use --write or --dry-run.\n',
		);
		process.exit(1);
	}

	for (const f of files) processFile(f, opts);
})();
