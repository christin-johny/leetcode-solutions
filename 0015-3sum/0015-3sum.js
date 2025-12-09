/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    nums.sort((a, b) => a - b);
    const res = [];
    const n = nums.length;

    for (let i = 0; i < n - 2; i++) {
        // skip duplicate first elements
        if (i > 0 && nums[i] === nums[i - 1]) continue;

        let l = i + 1;
        let r = n - 1;

        while (l < r) {
            const sum = nums[i] + nums[l] + nums[r];

            if (sum === 0) {
                res.push([nums[i], nums[l], nums[r]]);

                // skip duplicates for left
                while (l < r && nums[l] === nums[l + 1]) l++;
                // skip duplicates for right
                while (l < r && nums[r] === nums[r - 1]) r--;

                l++;
                r--;
            } else if (sum < 0) {
                l++;
            } else {
                r--;
            }
        }
    }

    return res;
};
