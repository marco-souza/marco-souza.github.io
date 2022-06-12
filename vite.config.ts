import { defineConfig, Plugin } from "vite";
import solidPlugin from "vite-plugin-solid";
import Unocss from "unocss/vite";
import { presetUno, presetWebFonts } from "unocss";
import tsconfigPaths from "vite-tsconfig-paths";

import { githubPlugin } from "./plugins/github-plugin";
import { configPlugin } from "./plugins/yaml-config-plugin";
import { postsPlugin } from "./plugins/posts-plugin";

const times = (length: number) => Array.from({ length }).map((_, i) => i + 1);

const safePrefix = (prefix: string, size = 10) =>
  times(size).map((i) => `${prefix}${i}`);

const unoCssSetup = Unocss({
  safelist: [...safePrefix("grid-cols-")],
  presets: [
    presetUno(),
    presetWebFonts({
      provider: "google",
      fonts: {
        sans: "Roboto",
        serif: "Times New Roman",
      },
    }),
  ],
});

const config = defineConfig({
  plugins: [
    solidPlugin(),
    configPlugin({ relativePath: "./src/settings.yml" }),
    githubPlugin({ username: "marco-souza" }),
    postsPlugin(),
    tsconfigPaths(),
    unoCssSetup,
  ],
  build: {
    target: "esnext",
    polyfillDynamicImport: false,
  },
});

export default config;
