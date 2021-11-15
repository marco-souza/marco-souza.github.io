import matter from 'gray-matter';
import fs from 'fs';
import path from 'path';
import { remark } from 'remark';
import html from 'remark-html';

const postsDirectory = path.join(process.cwd(), 'posts');

export interface PostDetails {
  slug: string;
  meta: Record<string, string>;
  content: string;
}

export async function getPostBySlug(slug: string): Promise<PostDetails> {
  const realSlug = cleanSlug(slug);
  const file = fileDetails(realSlug);
  const content = await markdownToHTML(file.content);
  return { slug: realSlug, meta: file.data, content };
}

export interface Post {
  slug: string;
  path: string;
  meta: Record<string, string>;
}

export function getAllPosts(): Post[] {
  const files = fs.readdirSync(postsDirectory);
  return files.map(cleanSlug).map((slug) => {
    const { data: meta } = fileDetails(slug);
    const path = `/blog/${slug}`;
    return { slug, meta, path };
  });
}

const cleanSlug = (slug: string) => slug.replace(/\.md$/, '');

function fileDetails(slug: string) {
  const fullPath = path.join(postsDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  return matter(fileContents);
}

async function markdownToHTML(markdownText: string): Promise<string> {
  const markdown = await remark().use(html).process(markdownText);
  return markdown.toString();
}
