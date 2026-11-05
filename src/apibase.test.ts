import { describe, expect, it } from "vitest";
import { apiURL } from "./apibase";

describe("apiURL", () => {
  it("stays on the same origin by default", () => {
    expect(apiURL(undefined, "/api/v1/info")).toBe("/api/v1/info");
    expect(apiURL("", "/api/v1/info")).toBe("/api/v1/info");
  });
  it("prefixes a configured API origin, with or without a trailing slash", () => {
    expect(apiURL("https://api.example", "/api/v1/info")).toBe("https://api.example/api/v1/info");
    expect(apiURL("https://api.example//", "/api/v1/info")).toBe("https://api.example/api/v1/info");
  });
});
