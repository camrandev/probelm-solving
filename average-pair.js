"use strict";

// add whatever parameters you deem necessary & write docstring


//looks like multiple pointers

//inputs: nums, targetAvg
//output: boolean

//1, 2, 3], 2.5 ... true (2+3)/2 = 2.5
//[1, 2, 3], 2 ... true (1+3)/2 = 2
//[],4 ... false ... so have to check for empty array

/**takes array (nums) and num (targetAvg) and returns boolean (true/false) based
 * on whether two numbers in nums can average targetAvg
 */

function averagePair(nums, targetAvg) {
  if (nums.length <= 0) {
    return false;
  }

  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    if ((nums[left] + nums[right]) / 2 === targetAvg) {
      return true;
    }
    if ((nums[left] + nums[right]) / 2 > targetAvg) {
      right--;
    }
    else {
      left++;
    }

  }
  return false;
}

//guard case: return false if empty array
//while left is less than right
//start at left (0) and right(max)
//check avg ...
//if too high, right pointer moves left
// -- then check avg again
//if too low, left pointer moves right
//-- then check avg again
//if avg is correct, return true

