import { Plugin } from "vite";

export interface GithubConfig {
  // GitHuh username to be loaded
  readonly username: string;
}

export function githubPlugin(config: GithubConfig): Plugin {
  const virtualModuleId = "virtual:github";
  const resolvedVirtualModuleId = "\0" + virtualModuleId;

  return {
    name: "github:profile-plugin",
    enforce: "pre",
    resolveId(id) {
      if (id === virtualModuleId) return resolvedVirtualModuleId;
    },
    async load(id) {
      if (id === resolvedVirtualModuleId) {
        const resp = await fetch(
          `https://api.github.com/users/${config.username}`
        );
        const body = await resp.text();
        return `export const profile = ${body};`;
      }
    },
  };
}
