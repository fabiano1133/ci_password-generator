import { passwordGenerator } from "../src/password-generate";

describe("Password generator test", () => {
  it("Should be able to return status code 201", () => {
    const passwordGenerated = passwordGenerator();

    expect(passwordGenerated.statuCode).toEqual(201);
  });

  it("Should be able to return the creation date", () => {
    const passwordGenerated = passwordGenerator();

    expect(passwordGenerated.created_ad).toBe(new Date().toLocaleDateString());
  });
});
