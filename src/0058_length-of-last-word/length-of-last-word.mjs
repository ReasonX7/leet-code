/**
 * # Length of Last Word
 *
 * Given a string `s` consisting of words and spaces, return the length of the **last** word in the string.
 *
 * A word is a maximal substring consisting of non-space characters only.
 *
 * Constraints:
 *   - `1 <= s.length <= 10^4`
 *   - `s consists of only English letters and spaces ' '`
 *   - There will be at least one word in `s`
 *
 * @param {string} s
 * @return {number}
 */
export const lengthOfLastWord_LastIndexOf = (s) => {
  const trimmed = s.trim();
  const index = trimmed.lastIndexOf(" ");
  return trimmed.length - index - 1;
};

export const lengthOfLastWord_Length = (s) => {
  let wordLength = 0;

  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] !== " ") {
      wordLength++;
    } else if (wordLength > 0) {
      break;
    }
  }

  return wordLength;
};

export const lengthOfLastWord_SplitAt = (s) => {
  return s.trim().split(" ").at(-1).length;
};

export const lengthOfLastWord_Split = (s) => {
  const arr = s.trim().split(" ");
  return arr[arr.length - 1].length;
};

export const lengthOfLastWord_Regex = (s) => {
  return s.match(/([a-zA-Z]+)/g).at(-1).length;
};

export const lengthOfLastWord_Index = (s) => {
  let iEnd = s.length - 1;
  for (; s[iEnd] === " " && iEnd >= 0; iEnd--) {
  }

  let iStart = iEnd - 1;
  for (; s[iStart] !== " " && iStart >= 0; iStart--) {
  }

  return iEnd - iStart;
};


// export const lengthOfLastWord = lengthOfLastWord_LastIndexOf;
// export const lengthOfLastWord = lengthOfLastWord_Length;
// export const lengthOfLastWord = lengthOfLastWord_SplitAt;
// export const lengthOfLastWord = lengthOfLastWord_Split;
// export const lengthOfLastWord = lengthOfLastWord_Regex;
export const lengthOfLastWord = lengthOfLastWord_Index;
