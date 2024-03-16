import { describe, bench } from "vitest";
import {
  candySingleCycleUnoptimized,
  candySingleCycle,
  candyDoubleCycle,
  candyFastestLeetCodeSolution
} from "./0135-candy.mjs";

describe("#0135 - Candy", () => {
  describe("test case 08", () => {
    const ratings = Array.from({ length: 2_000 }).map((value, index) => index + 1).reverse();

    bench("#candySingleCycleUnoptimized", () => {
      candySingleCycleUnoptimized(ratings);
    });

    bench("#candySingleCycle", () => {
      candySingleCycle(ratings);
    });

    bench("#candyDoubleCycle", () => {
      candyDoubleCycle(ratings);
    });

    bench("#candyFastestLeetCodeSolution", () => {
      candyFastestLeetCodeSolution(ratings);
    });
  });

  describe("test case 10", () => {
    const ratings = [1, 2, 3, 5, 4, 3, 2, 1, 4, 3, 2, 1];

    bench("#candySingleCycleUnoptimized", () => {
      candySingleCycleUnoptimized(ratings);
    });

    bench("#candySingleCycle", () => {
      candySingleCycle(ratings);
    });

    bench("#candyDoubleCycle", () => {
      candyDoubleCycle(ratings);
    });

    bench("#candyFastestLeetCodeSolution", () => {
      candyFastestLeetCodeSolution(ratings);
    });
  })
});
