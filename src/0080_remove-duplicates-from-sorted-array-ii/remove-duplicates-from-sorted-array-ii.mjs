/**
 * # Remove Duplicates from Sorted Array II
 *
 * <-- Description -->
 */
export const removeDuplicatesFromSortedArrayII_Mine = (nums) => {
  let length = 1;

  for (let index = 1, count = 1; index < nums.length; index++) {
    count = nums[index - 1] === nums[index] ? count + 1 : 1;
    length += count <= 2;
    nums[length - 1] = nums[index];
  }

  return length;
};

export const removeDuplicatesFromSortedArrayII_FastestLeetCodeSolution = (nums) => {
  let count = 0;
  let i = 0;

  while (i < nums.length) {
    if (nums[i] !== nums[i + 2]) {
      nums[count] = nums[i];
      count++
    }
    i++;
  }

  return count;
};

export const removeDuplicatesFromSortedArrayII = removeDuplicatesFromSortedArrayII_Mine;
// export const removeDuplicatesFromSortedArrayII = removeDuplicatesFromSortedArrayII_FastestLeetCodeSolution;
