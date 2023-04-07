import solid from "solid-start/vite";
import solidStartStatic from "solid-start-static";
import { defineConfig } from "vite";

import { settingsPlugin } from "./plugins/yaml-settings";
import { githubPlugin } from "./plugins/github";
import { postsPlugin } from "./plugins/posts";

export default defineConfig({
  base: "/", // base URL for the projects
  plugins: [
    settingsPlugin({ relativePath: "./src/settings.yml" }),
    githubPlugin({ username: "marco-souza" }),
    postsPlugin(),
    solid({ adapter: solidStartStatic() }),
  ],
});
