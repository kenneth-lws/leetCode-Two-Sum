var twoSum = function(nums, target) {
    const map = new Map();
  for (const [i, x] of nums.entries()) {
    if (map.get(x) != null) {
      return [i, map.get(x)];
    }
    map.set(target - x, i);
  }
  return null;
};
