import path from "path";
import fs from "fs/promises";
import sitemap from "vite-plugin-sitemap";
import { Plugin } from "vite";

const asyncDynamicRoutes = [
  loadFolderRoutes({ folder: "./src/routes/", urlPath: "/" }),
  loadFolderRoutes({ folder: "./posts", urlPath: "/blog/" }),
];

export async function sitemapGenerator(): Promise<Plugin> {
  const outDir = "./public/";
  const hostname = await loadHomepage();
  const dynamicRoutes = await Promise.all(asyncDynamicRoutes).then((routes) =>
    routes.flat()
  );

  const plugin: Plugin = sitemap({
    outDir,
    hostname,
    dynamicRoutes,
  });

  return plugin;
}

async function loadHomepage(): Promise<string> {
  const postsPath = getPathFromRoot("package.json");
  const packageJson = await fs.readFile(postsPath);
  const { homepage } = JSON.parse(packageJson.toString());
  return homepage;
}

const RE_FILENAME = /\..*$/;

async function loadFolderRoutes({ folder = "/", urlPath = "/" }) {
  const postsPath = getPathFromRoot(folder);
  const files = await fs.readdir(postsPath);

  return (
    files
      // filter invalid routes
      .filter((filename) => filename[0] !== "[")
      // map to route
      .map((filename) => filename.replace(RE_FILENAME, ""))
      .map((route) => (route === "index" ? urlPath : `${urlPath}${route}`))
      // sort by length
      .sort((r1, r2) => r1.length - r2.length)
  );
}

function getPathFromRoot(fileOrFolder: string) {
  const projectBasePath = `${__dirname}/../`;
  return path.resolve(projectBasePath, fileOrFolder);
}
