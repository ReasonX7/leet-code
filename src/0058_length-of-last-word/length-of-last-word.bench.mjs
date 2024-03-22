import { bench, describe } from "vitest";
import {
  lengthOfLastWord_Length, lengthOfLastWord_Index,
  lengthOfLastWord_LastIndexOf, lengthOfLastWord_Regex,
  lengthOfLastWord_Split, lengthOfLastWord_SplitAt
} from "./length-of-last-word.mjs";

describe("#0058 - Length Of Last Word", () => {
  describe("Test Case #01", () => {
    const str = "Hello World";

    bench("#lengthOfLastWord_LastIndexOf", () => {
      lengthOfLastWord_LastIndexOf(str);
    });

    bench("#lengthOfLastWord_Length", () => {
      lengthOfLastWord_Length(str);
    });

    bench("#lengthOfLastWord_SplitAt", () => {
      lengthOfLastWord_SplitAt(str);
    });

    bench("#lengthOfLastWord_Split", () => {
      lengthOfLastWord_Split(str);
    });

    bench("#lengthOfLastWord_Regex", () => {
      lengthOfLastWord_Regex(str);
    });

    bench("#lengthOfLastWord_Index", () => {
      lengthOfLastWord_Index(str);
    });
  });

  describe("Test Case #02", () => {
    const str = "   fly me   to   the moon  ";

    bench("#lengthOfLastWord_LastIndexOf", () => {
      lengthOfLastWord_LastIndexOf(str);
    });

    bench("#lengthOfLastWord_Length", () => {
      lengthOfLastWord_Length(str);
    });

    bench("#lengthOfLastWord_SplitAt", () => {
      lengthOfLastWord_SplitAt(str);
    });

    bench("#lengthOfLastWord_Split", () => {
      lengthOfLastWord_Split(str);
    });

    bench("#lengthOfLastWord_Regex", () => {
      lengthOfLastWord_Regex(str);
    });

    bench("#lengthOfLastWord_Index", () => {
      lengthOfLastWord_Index(str);
    });
  });
});