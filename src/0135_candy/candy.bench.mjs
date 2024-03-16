import { describe, bench } from "vitest";
import {
  candy_SingleCycleUnoptimized,
  candy_SingleCycle,
  candy_DoubleCycle,
  candy_FastestLeetCodeSolution
} from "./candy.mjs";

describe("#0135 - Candy", () => {
  describe("Test Case #08", () => {
    const ratings = Array.from({ length: 2_000 }).map((value, index) => index + 1).reverse();

    bench("#candy_SingleCycleUnoptimized", () => {
      candy_SingleCycleUnoptimized(ratings);
    });

    bench("#candy_SingleCycle", () => {
      candy_SingleCycle(ratings);
    });

    bench("#candy_DoubleCycle", () => {
      candy_DoubleCycle(ratings);
    });

    bench("#candy_FastestLeetCodeSolution", () => {
      candy_FastestLeetCodeSolution(ratings);
    });
  });

  describe("Test Case #10", () => {
    const ratings = [1, 2, 3, 5, 4, 3, 2, 1, 4, 3, 2, 1];

    bench("#candy_SingleCycleUnoptimized", () => {
      candy_SingleCycleUnoptimized(ratings);
    });

    bench("#candy_SingleCycle", () => {
      candy_SingleCycle(ratings);
    });

    bench("#candy_DoubleCycle", () => {
      candy_DoubleCycle(ratings);
    });

    bench("#candy_FastestLeetCodeSolution", () => {
      candy_FastestLeetCodeSolution(ratings);
    });
  })
});
