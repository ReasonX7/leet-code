import { describe, bench } from "vitest";
import {
  validUtf8_Mine,
  validUtf8_LeetCodeFastestSolution,
} from "./utf-8-validation.mjs";

describe.only("#0393 - UTF-8 Validation", () => {
  describe("Test Case #01", () => {
    const bytes = [248, 130, 130, 130];

    bench("#validUtf8_Mine", () => {
      validUtf8_Mine(bytes);
    });

    bench("#validUtf8_LeetCodeFastestSolution", () => {
      validUtf8_LeetCodeFastestSolution(bytes);
    });
  });
});