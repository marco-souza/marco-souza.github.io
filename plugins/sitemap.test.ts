import { expect, it, describe } from "vitest";
import { makeSitemapConfig } from "./sitemap";

describe("validate sitemap config", async () => {
  const output = await makeSitemapConfig();

  it("generate static routes", () => {
    const staticRoutes = ["/", "/blog", "/resume"];

    staticRoutes.map((route) => {
      expect(output.dynamicRoutes).toContain(route);
    });
  });

  it("generate to public folder", () => {
    expect(output.outDir).toBe("./public/");
  });

  it("use package homepage", () => {
    const { homepage } = require("../package.json");
    expect(output.hostname).toBe(homepage);
  });
});
