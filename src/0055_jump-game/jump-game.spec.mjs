import { describe, it, expect } from "vitest";
import { jumpGame } from "./jump-game.mjs";
import { readJson } from "../../utils/file-system.mjs";

describe("#0055 - Jump Game", () => {
  it("Test Case #01", () => {
    console.log(import.meta.url)

    expect(jumpGame([2, 3, 1, 1, 4])).toBeTruthy();
  });

  it("Test Case #02", () => {
    expect(jumpGame([3, 2, 1, 0, 4])).toBeFalsy();
  });

  it("Test Case #03", () => {
    expect(jumpGame([0, 1])).toBeFalsy();
  });

  it("Test Case #04", () => {
    expect(jumpGame([10, 2, 1, 0, 4])).toBeTruthy();
  });

  it("Test Case #05", async () => {
    const input = await readJson(import.meta.url, "test/assets/extra-large-input.json");

    expect(jumpGame(input)).toBeFalsy();
  });
});