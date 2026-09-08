import { describe, expect, it } from "vitest";
import { slug } from "./slug";

describe("slug", () => {
  it("lowercases and replaces spaces with dashes", () => {
    expect(slug("Clean Architecture")).toBe("clean-architecture");
  });

  it("removes accents-free characters and collapses separators", () => {
    expect(slug("Node.js")).toBe("node-js");
    expect(slug("Next.js")).toBe("next-js");
  });

  it("trims leading and trailing dashes", () => {
    expect(slug("--Hello World--")).toBe("hello-world");
    expect(slug("!!!")).toBe("");
  });

  it("handles empty strings", () => {
    expect(slug("")).toBe("");
  });
});
