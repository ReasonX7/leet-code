import { describe, expect, it } from "vitest";
import { candy } from "./0135-candy.mjs";

describe("#0135 - Candy", () => {
  it("test case 01", () => {
    expect(candy([1, 0, 2])).toBe(5);
    // Rating  | 1 | 0 | 2
    // Candies | 2 | 1 | 2
  });

  it("test case 02", () => {
    expect(candy([1, 2, 2])).toBe(4);
    // Rating  | 1 | 2 | 2
    // Candies | 1 | 2 | 1
  });

  it("test case 03", () => {
    expect(candy([1, 2, 87, 87, 87, 2, 1])).toBe(13);
    // Rating  | 1 | 2 | 87 | 87 | 87 | 2 | 1
    // Candies | 1 | 2 | 3  | 1  | 3  | 2 | 1
  });

  it("test case 04", () => {
    expect(candy([29, 51, 87, 87, 72, 12])).toBe(12);
    // Rating  | 29 | 51 | 87 | 87 | 72 | 12
    // Candies | 1  | 2  | 3  | 3  | 2  | 1
  });

  it("test case 05", () => {
    expect(candy([1, 3, 4, 5, 2])).toBe(11);
    // Rating  | 1 | 3 | 4 | 5 | 2
    // Candies | 1 | 2 | 3 | 4 | 1
  });

  it("test case 06", () => {
    expect(candy([1, 2, 3, 1, 3, 2, 1])).toBe(13);
    // Rating  | 1 | 2 | 3 | 1 | 3 | 2 | 1
    // Candies | 1 | 2 | 4 | 1 | 3 | 2 | 1
  });

  it("test case 07", () => {
    expect(candy([1, 6, 10, 8, 7, 3, 2])).toBe(18);
    // Rating  | 1 | 6 | 10 | 8 | 7 | 3 | 2
    // Candies | 1 | 2 | 5  | 4 | 3 | 2 | 1
  });

  it("test case 08", () => {
    expect(
      candy(
        Array.from({ length: 4 }).map((value, index) => index + 1).reverse(),
      ),
    ).toBe(10);
    // Rating  | 4 | 3 | 2 | 1
    // Candies | 4 | 3 | 2 | 1 = 10
  });

  it("test case 08", () => {
    // Generate rating array of decline values from 20_000 down to 1: [20_000, 19_999, ..., 2, 1].
    expect(
      candy(
        Array.from({ length: 20_000 }).map((value, index) => index + 1).reverse(),
      ),
    ).toBe(200_010_000);
  });

  it("test case 10", () => {
    expect(candy([1, 2, 3, 5, 4, 3, 2, 1, 4, 3, 2, 1])).toBe(31);
    // Rating  | 1 | 2 | 3 | 5 | 4 | 3 | 2 | 1 | 4 | 3 | 2 | 1
    // Candies | 1 | 2 | 3 | 5 | 4 | 3 | 2 | 1 | 4 | 3 | 2 | 1
  });
});
