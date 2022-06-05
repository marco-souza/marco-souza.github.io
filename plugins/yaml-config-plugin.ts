import fs from "fs";
import path from "path";
import { Plugin } from "vite";
import * as YAML from "yaml";

interface PluginConfig {
  readonly relativePath?: string;
}

type PluginOptions = PluginConfig | undefined;

export function configPlugin(config: PluginOptions = {}): Plugin {
  const virtualModuleId = "virtual:config";
  const resolvedVirtualModuleId = "\0" + virtualModuleId;

  return {
    name: "vite:config",
    enforce: "pre",
    resolveId(id) {
      if (id === virtualModuleId) return resolvedVirtualModuleId;
    },
    async load(id) {
      if (id === resolvedVirtualModuleId) {
        const { relativePath = "config.yml" } = config;
        const projectBasePath = `${__dirname}/../`;
        const absolutePath = path.resolve(projectBasePath, relativePath);
        const configFile = fs.readFileSync(absolutePath, "utf8");
        const parsedConfig = YAML.parse(configFile);
        return `export const config = ${JSON.stringify(parsedConfig)} `;
      }
    },
  };
}
