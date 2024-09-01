import matter from 'gray-matter';
import { marked } from 'marked';

export function parseMarkdown(content) {
    const { data, content: markdownContent } = matter(content);
    const htmlContent = marked(markdownContent);

    return {
        ...data,
        content: htmlContent,
    };
}