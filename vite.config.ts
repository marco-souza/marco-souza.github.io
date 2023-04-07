import solid from "solid-start/vite";
import solidStartStatic from "solid-start-static";
import { defineConfig } from "vite";

export default defineConfig({
  base: "/", // base URL for the projects
  plugins: [solid({ adapter: solidStartStatic() })],
});
