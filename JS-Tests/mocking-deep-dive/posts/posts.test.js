import { it, expect, describe } from "vitest";

describe("extractpostdata", () => {
  it("should extract title and content from the provided form data", () => {
    const testTitle = "title";
    const testContent = "content";
    const testFormData = {
      title: testTitle,
      content: testContent,
      get(identifier) {
        return this[identifier];
      },
    };
  });
});
