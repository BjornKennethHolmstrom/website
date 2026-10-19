#!/usr/bin/env node
// scripts/generate-all-pdfs.js
// Runs every scripts/generate-*.js, once per language where the script takes one.
//
//   node scripts/generate-all-pdfs.js --dry-run          # show the plan only
//   node scripts/generate-all-pdfs.js                     # run everything (3 at a time)
//   node scripts/generate-all-pdfs.js --jobs 4
//   node scripts/generate-all-pdfs.js --only report,book  # scripts whose name contains any of these
//   node scripts/generate-all-pdfs.js --exclude glossary
//
// Language handling is read from each script's source:
//   • `process.argv[2] || 'en'` + a language array → one run per language
//   • any other use of process.argv (e.g. "no arg = all languages") → one run, no args
//   • no process.argv at all → one run, no args
// Output of each run goes to logs/pdf/<script>[-<lang>].log.

import fs from 'fs';
import path from 'path';
import { spawn } from 'child_process';
import { fileURLToPath } from 'url';

const SCRIPTS = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(SCRIPTS, '..');
const LOG_DIR = path.join(ROOT, 'logs', 'pdf');
const SELF = path.basename(fileURLToPath(import.meta.url));

const args = process.argv.slice(2);
const flag = (f) => args.includes(f);
const opt = (f, d = '') => {
	const i = args.indexOf(f);
	return i >= 0 && args[i + 1] && !args[i + 1].startsWith('--') ? args[i + 1] : d;
};
const list = (s) => s.split(',').map((x) => x.trim()).filter(Boolean);

const DRY = flag('--dry-run');
const JOBS = Math.max(1, parseInt(opt('--jobs', '3'), 10) || 3);
const ONLY = list(opt('--only'));
const EXCLUDE = ['generate-svg-pdf.js', ...list(opt('--exclude'))];

// ── Work out how to call each script ─────────────────────────────────────────
const LANG = `['"][a-z]{2}(?:[_-][A-Za-z]{2})?['"]`;

function parseLanguages(src) {
	const named = src.match(
		/(?:VALID_LANGUAGES|SUPPORTED_LANGUAGES|LANGUAGES|LANGS)\s*=\s*\[([^\]]*)\]/
	);
	const pick = (s) => [...s.matchAll(/['"]([a-z]{2}(?:[_-][A-Za-z]{2})?)['"]/g)].map((m) => m[1]);
	if (named) return pick(named[1]);
	// Fallback: the longest array literal made only of language codes
	const arrays = [...src.matchAll(new RegExp(`\\[\\s*${LANG}(?:\\s*,\\s*${LANG})*\\s*,?\\s*\\]`, 'g'))];
	if (!arrays.length) return [];
	return pick(arrays.map((m) => m[0]).sort((a, b) => b.length - a.length)[0]);
}

function plan(file) {
	const src = fs.readFileSync(path.join(SCRIPTS, file), 'utf-8');
	const notes = [];
	if (!src.includes('applyProvenance')) notes.push('no provenance label');

	if (!/process\.argv/.test(src)) return { runs: [[]], notes };

	if (/process\.argv\[2\]\s*\|\|\s*['"]/.test(src)) {
		const langs = parseLanguages(src);
		if (langs.length) return { runs: langs.map((l) => [l]), notes };
		notes.push('takes a language but list not found; default only');
		return { runs: [[]], notes };
	}
	return { runs: [[]], notes };
}

const scripts = fs
	.readdirSync(SCRIPTS)
	.filter((f) => /^generate-.*\.m?js$/.test(f) && f !== SELF)
	.filter((f) => !EXCLUDE.some((x) => f.includes(x)))
	.filter((f) => !ONLY.length || ONLY.some((x) => f.includes(x)))
	.sort();

const jobs = [];
for (const file of scripts) {
	const { runs, notes } = plan(file);
	for (const a of runs) jobs.push({ file, args: a, notes });
}

const label = (j) => `${j.file}${j.args.length ? ` ${j.args.join(' ')}` : ''}`;

console.log(`${scripts.length} scripts → ${jobs.length} runs${DRY ? ' (dry run)' : `, ${JOBS} at a time`}\n`);
if (DRY) {
	let last = '';
	for (const j of jobs) {
		if (j.file !== last) {
			const langs = jobs.filter((x) => x.file === j.file).map((x) => x.args[0]).filter(Boolean);
			const n = j.notes.length ? `   ⚠ ${j.notes.join('; ')}` : '';
			console.log(`  ${j.file}  ${langs.length ? `[${langs.join(', ')}]` : '(no args)'}${n}`);
			last = j.file;
		}
	}
	process.exit(0);
}

// ── Run ──────────────────────────────────────────────────────────────────────
fs.mkdirSync(LOG_DIR, { recursive: true });
const failed = [];
let done = 0;
const t0 = Date.now();

function run(job) {
	return new Promise((resolve) => {
		const logName = `${job.file.replace(/\.m?js$/, '')}${job.args.length ? `-${job.args.join('-')}` : ''}.log`;
		const logPath = path.join(LOG_DIR, logName);
		const log = fs.createWriteStream(logPath);
		const started = Date.now();
		const child = spawn(process.execPath, [path.join(SCRIPTS, job.file), ...job.args], { cwd: ROOT });
		child.stdout.pipe(log);
		child.stderr.pipe(log);
		child.on('close', (code) => {
			done++;
			const secs = ((Date.now() - started) / 1000).toFixed(0);
			const ok = code === 0;
			if (!ok) failed.push({ job, logPath });
			console.log(`${ok ? '✓' : '✗'} [${done}/${jobs.length}] ${label(job)}  ${secs}s${ok ? '' : `  → ${path.relative(ROOT, logPath)}`}`);
			resolve();
		});
	});
}

const queue = [...jobs];
await Promise.all(
	Array.from({ length: Math.min(JOBS, queue.length) }, async () => {
		while (queue.length) await run(queue.shift());
	})
);

const mins = ((Date.now() - t0) / 60000).toFixed(1);
console.log(`\nDone in ${mins} min: ${jobs.length - failed.length} succeeded, ${failed.length} failed.`);
const unlabelled = [...new Set(jobs.filter((j) => j.notes.includes('no provenance label')).map((j) => j.file))];
if (unlabelled.length) console.log(`⚠ Without provenance label (${unlabelled.length}): ${unlabelled.join(', ')}`);
if (failed.length) {
	console.log('Failed:');
	failed.forEach((f) => console.log(`  ${label(f.job)}  → ${path.relative(ROOT, f.logPath)}`));
	process.exit(1);
}
