import { describe, expect, it } from "vitest";
import { candy } from "./candy.mjs";

describe("#0135 - Candy", () => {
  it("Test Case #01", () => {
    expect(candy([1, 0, 2])).toBe(5);
    // Rating     | 1 | 0 | 2
    // Koef       | 1 | 1 | 2
    // Count      | 1 | 2 | 4
    // AscendKoef | 0 | 1 | 1

    // Candies    | 2 | 1 | 2

    // Result = Count + AscendKoef = 4 + 1 = 5
  });

  it("Test Case #02", () => {
    expect(candy([1, 2, 2])).toBe(4);
    // Rating     | 1 | 2 | 2
    // Count      | 1 | 2 | 4
    // Koef       | 1 | 1 | 2
    // AscendKoef | 0 | 0 | 0

    // Candies    | 1 | 2 | 1
  });

  it("Test Case #03", () => {
    expect(candy([1, 2, 87, 87, 87, 2, 1])).toBe(13);
    // Rating     | 1  | 2  | 87 | 87 | 87 | 2  | 1
    // Koef       | 1  | 2  | 3  | 1  | 1  | 1  | 1
    // AscendKoef | 0  | 0  | 0  | 0  | 1  | 1  | 0
    // Count      | 1  | 3  | 6  | 7  | 9  | 11 | 12

    // Candies    | 1  | 2  | 3  | 1  | 3  | 2 | 1
  });

  it("Test Case #04", () => {
    expect(candy([29, 51, 87, 87, 72, 12])).toBe(12);
    // Rating     | 29 | 51 | 87 | 87 | 72 | 12
    // Count      | 1  | 3  | 6  | 8  | 9  | 10
    // Koef       | 1  | 2  | 3  | 2  | 1  | 1
    // AscendKoef | 0  | 0  | 0  | 1  | 2  | 2

    // Candies    | 1  | 2  | 3  | 3  | 2  | 1


    // Result = Count + AscendKoef = 10 + 2 = 12
  });

  it("Test Case #05", () => {
    expect(candy([1, 3, 4, 5, 2])).toBe(11);
    // Rating     | 1  | 3  | 4  | 5  | 2
    // Count      | 1  | 3  | 6  | 10 | 11
    // Koef       | 1  | 2  | 3  | 4  | 1
    // AscendKoef | 0  | 0  | 0  | 0  | 0

    // Candies | 1 | 2 | 3 | 4 | 1
  });

  it("Test Case #06", () => {
    expect(candy([1, 2, 3, 1, 3, 2, 1])).toBe(13);
    // Rating  | 1 | 2 | 3 | 1 | 3 | 2 | 1
    // Candies | 1 | 2 | 4 | 1 | 3 | 2 | 1
  });

  it("Test Case #07", () => {
    expect(candy([1, 6, 10, 8, 7, 3, 2])).toBe(18);
    // Rating  | 1 | 6 | 10 | 8 | 7 | 3 | 2
    // Candies | 1 | 2 | 5  | 4 | 3 | 2 | 1
  });

  it("Test Case #08", () => {
    expect(
      candy(
        Array.from({ length: 4 }).map((value, index) => index + 1).reverse()
      )
    ).toBe(10);
    // Rating  | 4 | 3 | 2 | 1
    // Candies | 4 | 3 | 2 | 1 = 10
  });

  it("Test Case #09", () => {
    // Generate rating array of decline values from 20_000 down to 1: [20_000, 19_999, ..., 2, 1].
    // expect(
    //   candy(
    //     Array.from({ length: 20_000 }).map((value, index) => index + 1).reverse()
    //   )
    // ).toBe(200_010_000);
  });

  it("Test Case #10", () => {
    expect(candy([1, 2, 3, 5, 4, 3, 2, 1, 4, 3, 2, 1])).toBe(31);
    // Rating  | 1 | 2 | 3 | 5 | 4 | 3 | 2 | 1 | 4 | 3 | 2 | 1
    // Candies | 1 | 2 | 3 | 5 | 4 | 3 | 2 | 1 | 4 | 3 | 2 | 1
  });
});
