import path from "path";
import fs from "fs/promises";
import { Plugin } from "vite";
// @ts-ignore
import metadataParser from "markdown-yaml-metadata-parser";

export interface MarkdownPostsConfig {
  readonly folder?: string;
}

export function postsPlugin({
  folder = "./posts",
}: MarkdownPostsConfig = {}): Plugin {
  const virtualModuleId = "virtual:posts";
  const resolvedVirtualModuleId = "\0" + virtualModuleId;

  return {
    name: "github:profile-plugin",
    enforce: "pre",
    resolveId(id) {
      if (id === virtualModuleId) return resolvedVirtualModuleId;
    },
    async load(id) {
      if (id === resolvedVirtualModuleId) {
        const projectBasePath = `${__dirname}/../`;
        const postsPath = path.resolve(projectBasePath, folder);
        const postFilesList = await fs.readdir(postsPath);
        const posts = await loadPosts(postFilesList, postsPath);

        return `
          const postsStore = ${JSON.stringify(posts)};
          export const posts = ${JSON.stringify(Object.values(posts))};
          export const getPostByName = (filename) => postsStore[filename];
        `;
      }
    },
  };
}

interface ParsedData {
  metadata: Omit<Post, "content">;
  content: string;
}

const postsStore: Record<string, Post> = {};

async function loadPosts(filesList: string[], postsPath: string) {
  if (Object.entries(postsStore).length > 0) return postsStore;

  const loadedPosts = await Promise.all(
    filesList.map(async (filenameWithExt) => {
      const filepath = path.join(postsPath, filenameWithExt);
      const file = await fs.readFile(filepath);

      const { content, metadata }: ParsedData = metadataParser(file.toString());
      const created_at = new Date(metadata.created_at).toISOString();
      const filename = filenameWithExt.slice(0, -3);
      const url = `/blog/${filename}`;

      const post = <Post>{
        ...metadata,
        content,
        created_at,
        filename,
        url,
      };
      return post;
    })
  );

  loadedPosts
    .sort((a, b) => timestamp(a.created_at) - timestamp(b.created_at))
    .map((post) => (postsStore[post.filename] = post));

  return postsStore;
}

const timestamp = (date: string) => new Date(date).getTime();
