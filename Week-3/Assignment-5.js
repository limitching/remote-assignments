function twoSum(nums, target) {
  // your code here
  for (let checking = 0; checking < nums.length; checking++) {
    const residual = target - nums[checking];
    for (let i = checking + 1; i < nums.length; i++) {
      //check if residual matches the rest of index
      if (nums[i] === residual) {
        //find solution, return
        return [checking, i];
      }
    }
  }
  //if not found any solution, return -1
  return -1;
}
console.log(twoSum([2, 7, 11, 15], 9));
/*For example:
twoSum([2, 7, 11, 15], 9);
Should returns: [0, 1]
Because: nums[0]+nums[1] is 9
*/
