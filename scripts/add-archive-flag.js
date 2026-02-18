// add-archive-flag.js
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const archivePath = path.join(__dirname, 'src/lib/posts-archive');

if (!fs.existsSync(archivePath)) {
  console.error(`❌ Archive folder not found: ${archivePath}`);
  process.exit(1);
}

console.log(`📁 Scanning: ${archivePath}\n`);

let updatedCount = 0;
let errorCount = 0;
let skippedCount = 0;

function findIndexMdFiles(dir) {
  let results = [];
  try {
    const files = fs.readdirSync(dir);
    for (const file of files) {
      const fullPath = path.join(dir, file);
      const stat = fs.statSync(fullPath);
      if (stat.isDirectory()) {
        results = results.concat(findIndexMdFiles(fullPath));
      } else if (file === 'index.md') {
        results.push(fullPath);
      }
    }
  } catch (error) {
    console.error(`❌ Error reading directory ${dir}:`, error.message);
  }
  return results;
}

/**
 * Find the best position to insert a new field in YAML frontmatter
 */
function findInsertPosition(lines) {
  let lastFieldLine = -1;
  let i = 0;
  
  while (i < lines.length) {
    const line = lines[i];
    const trimmed = line.trim();
    
    // Skip empty lines
    if (trimmed === '') {
      i++;
      continue;
    }
    
    // Check if this line starts a new field (starts with word character followed by colon)
    if (/^[a-zA-Z0-9_-]+:/.test(trimmed)) {
      // This is a field
      lastFieldLine = i;
      
      // Check if the field has a value on the same line (not empty)
      const hasInlineValue = trimmed.includes(':') && 
                            trimmed.split(':')[1].trim() !== '';
      
      if (!hasInlineValue) {
        // This field might have indented values following
        let j = i + 1;
        while (j < lines.length) {
          const nextLine = lines[j];
          // If next line is indented (starts with space/tab), it's part of this field's value
          if (nextLine.startsWith(' ') || nextLine.startsWith('\t')) {
            j++;
          } else {
            break;
          }
        }
        // Update lastFieldLine to the last line of this field's value
        lastFieldLine = j - 1;
        i = j;
      } else {
        i++;
      }
    } else {
      i++;
    }
  }
  
  // Insert after the last field we found
  return lastFieldLine !== -1 ? lastFieldLine + 1 : 1;
}

function addArchiveFlag(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Check if file has frontmatter
    if (!content.trim().startsWith('---')) {
      console.log(`  ⚠️  No frontmatter found, skipping: ${path.relative(archivePath, filePath)}`);
      skippedCount++;
      return false;
    }
    
    // Split frontmatter from content
    const parts = content.split('---');
    if (parts.length < 3) {
      console.log(`  ⚠️  Malformed frontmatter, skipping: ${path.relative(archivePath, filePath)}`);
      skippedCount++;
      return false;
    }
    
    const frontmatter = parts[1];
    const restContent = parts.slice(2).join('---');
    
    // Check if archived flag already exists
    if (frontmatter.includes('archived:')) {
      console.log(`  ✓ Already has archived flag: ${path.relative(archivePath, filePath)}`);
      return false;
    }
    
    // Split into lines for processing
    const lines = frontmatter.split('\n');
    
    // Find the best position to insert
    const insertPosition = findInsertPosition(lines);
    
    // Insert archived flag
    lines.splice(insertPosition, 0, 'archived: true');
    
    const updatedFrontmatter = lines.join('\n');
    const newContent = `---${updatedFrontmatter}---${restContent}`;
    
    fs.writeFileSync(filePath, newContent, 'utf8');
    console.log(`  ✅ Added archived flag: ${path.relative(archivePath, filePath)}`);
    return true;
    
  } catch (error) {
    console.error(`  ❌ Error processing ${filePath}:`, error.message);
    errorCount++;
    return false;
  }
}

async function main() {
  console.log('🔍 Searching for index.md files...\n');
  
  const indexFiles = findIndexMdFiles(archivePath);
  
  console.log(`Found ${indexFiles.length} index.md files\n`);
  console.log('Processing files:\n');
  
  for (const file of indexFiles) {
    const success = addArchiveFlag(file);
    if (success) updatedCount++;
  }
  
  console.log('\n' + '='.repeat(50));
  console.log(`\n📊 Summary:`);
  console.log(`   ✅ Updated: ${updatedCount} files`);
  console.log(`   ⚠️  Skipped (already had flag): ${skippedCount} files`);
  console.log(`   ❌ Errors: ${errorCount} files`);
  console.log(`   📁 Total processed: ${indexFiles.length} files`);
  
  console.log('\n🎉 Done! Please verify a few files before moving them.');
}

main().catch(console.error);
