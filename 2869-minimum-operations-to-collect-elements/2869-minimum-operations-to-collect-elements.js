/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minOperations = function(nums, k) {
    const collected = new Set();
    let operations = 0;

    for (let i = nums.length - 1; i >= 0; i--) {
        operations++;

        if (nums[i] <= k) {
            collected.add(nums[i]);
        }

        if (collected.size === k) {
            return operations;
        }
    }
};
