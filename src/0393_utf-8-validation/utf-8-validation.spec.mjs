import { describe, it, expect } from "vitest";
import { validUtf8 } from "./utf-8-validation.mjs";

describe("#0055 - Jump Game", () => {
  it("Test Case #01", () => {
    expect(validUtf8([197, 130, 1])).toBeTruthy();
  });

  it("Test Case #02", () => {
    expect(validUtf8([235, 140, 4])).toBeFalsy();
  });

  it("Test Case #03", () => {
    expect(validUtf8([230, 136, 145])).toBeTruthy();
  });

  it("Test Case #04", () => {
    expect(validUtf8([145])).toBeFalsy();
  });

  it("Test Case #05", () => {
    expect(validUtf8([248, 130, 130, 130])).toBeFalsy();
  });

  it("Test Case #06", () => {
    expect(validUtf8([197, 194, 1])).toBeFalsy();
  });
});
