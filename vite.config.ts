import { defineConfig } from "vite";
import solidPlugin from "vite-plugin-solid";
import Unocss from "unocss/vite";
import { presetUno, presetWebFonts } from "unocss";
import tsconfigPaths from "vite-tsconfig-paths";

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
  plugins: [solidPlugin(), tsconfigPaths(), unoCssSetup],
  build: {
    target: "esnext",
    polyfillDynamicImport: false,
  },
});

export default config;
