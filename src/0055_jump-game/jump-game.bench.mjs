import { describe, bench } from "vitest";
import { jumpGame } from "./jump-game.mjs";

describe.skip("#0055 - Jump Game", () => {
  bench("Test Case #01", () => {
    jumpGame([2, 3, 1, 1, 4]);
  });
});