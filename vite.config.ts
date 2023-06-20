import solid from "solid-start/vite";
import { defineConfig } from "vite";

import { settingsPlugin } from "./plugins/yaml-settings";
import { sitemapGenerator } from "./plugins/sitemap";
import { githubPlugin } from "./plugins/github";
import { postsPlugin } from "./plugins/posts";

export default defineConfig({
  base: "/", // base URL for the projects
  plugins: [
    settingsPlugin({ relativePath: "./src/settings.yml" }),
    githubPlugin({ username: "marco-souza" }),
    sitemapGenerator(),
    postsPlugin(),
    solid({
      ssr: false,
      extensions: [".mdx", ".md"],
    }),
  ],
});
