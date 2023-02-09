import { it, expect } from "vitest";

import { generateToken, generateTokenPromise } from "./async-example";

it("should generate a token value", (done) => {
  const testUserEmail = "test@test.com";
  generateToken(testUserEmail, (err, token) => {
    try {
      expect(token).toBeDefined();
      done();
    } catch (err) {
      done(err);
    }
  });
});

it("should generate a token value", () => {
  const testUserEmail = "test@test.com";

  expect(generateTokenPromise(testUserEmail)).resolves.toBeDefined();
});

it("should generate a token value", async () => {
  const testUserEmail = "test@test.com";

  const token = await generateTokenPromise(testUserEmail);
  expect(token).toBeDefined();
});

it("should generate a token value", () => {
  const testUserEmail = "test@test.com";

  return expect(generateTokenPromise(testUserEmail)).resolves.toBeDefined();
});
