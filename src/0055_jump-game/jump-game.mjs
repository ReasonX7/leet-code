/**
 * # Jump Game
 *
 * <-- Description -->
 */
export const jumpGame = (nums) => {
  // https://medium.com/geekculture/the-jump-game-software-engineering-problem-5f7b58d9e1ec
  let currentJumpLength = nums.length - 1;

  for (let index = nums.length - 2; index >= 0; index--) {
    if (index + nums[index] >= currentJumpLength) {
      currentJumpLength = index;
    }
  }

  return currentJumpLength === 0;
};
