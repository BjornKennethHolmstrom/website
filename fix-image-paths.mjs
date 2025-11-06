import { glob } from 'glob';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

// 1. Hitta alla index.md-filer
const files = await glob('src/lib/posts/**/index.md');

console.log(`Hittade ${files.length} inlägg. Påbörjar uppdatering...`);

for (const file of files) {
  // 2. Hämta "slug" (mappnamnet)
  const slug = path.basename(path.dirname(file));
  // OBS: Sökvägen är /blog/ (från din static-mapp), inte /blogg/
  const newBasePath = `/blog/${slug}/images/`;

  // 3. Läs och parsa filen
  const fileContent = fs.readFileSync(file, 'utf8');
  const { data: frontmatter, content } = matter(fileContent);

  let contentChanged = false;
  let frontmatterChanged = false;

  // 4. Uppdatera brödtext-innehåll (t.ex. ![](images/...) )
  const newContent = content.replace(
    /!\[(.*?)]\((.*?)\)/g, // Regex för Markdown-bilder
    (match, alt, src) => {
      // Lämna externa (http) eller redan fixade (/) bilder orörda
      if (!src.startsWith('http') && !src.startsWith('/')) {
        contentChanged = true;
        const filename = path.basename(src); // Hämtar bara filnamnet
        const newSrc = `${newBasePath}${filename}`; // t.ex. /blog/slug/images/bild.png
        return `![${alt}](${newSrc})`;
      }
      // Om den redan är fixad men fel, fixa den
      if (src.startsWith('/blog/') && !src.includes('/images/')) {
         contentChanged = true;
         const filename = path.basename(src);
         const newSrc = `${newBasePath}${filename}`;
         return `![${alt}](${newSrc})`;
      }
      return match; 
    }
  );

  // 5. Uppdatera frontmatter (t.ex. coverImage: "...")
  if (frontmatter.coverImage && !frontmatter.coverImage.startsWith('/')) {
    // Om det bara är ett filnamn
    frontmatter.coverImage = `${newBasePath}${frontmatter.coverImage}`;
    frontmatterChanged = true;
  } else if (frontmatter.coverImage && frontmatter.coverImage.startsWith('/blog/') && !frontmatter.coverImage.includes('/images/')) {
    // Om det är en felaktig sökväg (som i ditt exempel)
    const filename = path.basename(frontmatter.coverImage);
    frontmatter.coverImage = `${newBasePath}${filename}`;
    frontmatterChanged = true;
  }

  // 6. Skriv tillbaka filen BARA om något ändrats
  if (contentChanged || frontmatterChanged) {
    const newFileContent = matter.stringify(newContent, frontmatter);
    fs.writeFileSync(file, newFileContent);
    console.log(`Uppdaterade: ${slug}`);
  }
}

console.log('Klart! Alla sökvägar är uppdaterade.');
