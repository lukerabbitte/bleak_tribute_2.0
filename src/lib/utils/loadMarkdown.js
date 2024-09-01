import { promises as fs } from 'fs';
import path from 'path';
import { parseMarkdown } from './markdownParser';

const poemsDir = path.resolve('src/poems');

export async function getPoemData(slug) {
    try {
        const filePath = path.join(poemsDir, `${slug}.md`);
        const fileContent = await fs.readFile(filePath, 'utf-8');
        return parseMarkdown(fileContent);
    } catch (err) {
        console.error(`Error loading poem ${slug}:`, err);
        return null;
    }
}

export async function getAllPoemsData() {
    try {
        const files = await fs.readdir(poemsDir);
        const poems = await Promise.all(
            files.map(async (filename) => {
                const slug = filename.replace('.md', '');
                const filePath = path.join(poemsDir, filename);
                const fileContent = await fs.readFile(filePath, 'utf-8');
                return {
                    ...parseMarkdown(fileContent),
                    slug,
                };
            })
        );
        return poems;
    } catch (err) {
        console.error('Error loading poems:', err);
        return [];
    }
}
