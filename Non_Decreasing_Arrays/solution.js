let count = 0;
const checkPossibility = (nums) => {
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] < nums[i - 1]) {
      if (i - 2 >= 0 && nums[i] < nums[i - 2]) {
        nums[i] = nums[i - 1];
      }
      count++;
    }
    if (count > 1) {
      return false;
    }
  }
  return true;
}