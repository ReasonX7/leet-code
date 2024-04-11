import { describe, bench } from "vitest";
import {
  rotate_PushSplice,
  rotate_UnshiftPop,
  rotate_UsingReversalAlgorithm,
  rotate_FastestLeetCodeSolution
} from "./rotate-array.mjs";

describe.skip("#0189 - Rotate Array", () => {
  describe("Test Case #01", () => {
    const nums = [1, 2, 3, 4, 5, 6, 7];
    const k = 3;

    bench("#rotate_PushSplice", () => {
      rotate_PushSplice(nums, k);
    });

    bench("#rotate_UnshiftPop", () => {
      rotate_UnshiftPop(nums, k);
    });

    bench("#rotate_UsingReversalAlgorithm", () => {
      rotate_UsingReversalAlgorithm(nums, k);
    });

    bench("#rotate_FastestLeetCodeSolution", () => {
      rotate_FastestLeetCodeSolution(nums, k);
    });
  });

  describe("Test Case #02", () => {
    const nums = [-1, -100, 3, 99];
    const k = 2;

    bench("#rotate_PushSplice", () => {
      rotate_PushSplice(nums, k);
    });

    bench("#rotate_UnshiftPop", () => {
      rotate_UnshiftPop(nums, k);
    });

    bench("#rotate_UsingReversalAlgorithm", () => {
      rotate_UsingReversalAlgorithm(nums, k);
    });

    bench("#rotate_FastestLeetCodeSolution", () => {
      rotate_FastestLeetCodeSolution(nums, k);
    });
  });
});
