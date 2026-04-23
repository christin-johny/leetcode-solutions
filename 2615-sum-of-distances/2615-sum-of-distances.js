/**
 * @param {number[]} nums
 * @return {number[]}
 */
var distance = function(nums) {
    const map = new Map();
 
    for (let i = 0; i < nums.length; i++) {
        if (!map.has(nums[i])) {
            map.set(nums[i], []);
        }
        map.get(nums[i]).push(i);
    }

    const result = new Array(nums.length).fill(0);

    for (let [_, indices] of map) {
        let n = indices.length;
        let prefixSum = new Array(n).fill(0);

        prefixSum[0] = indices[0];
        for (let i = 1; i < n; i++) {
            prefixSum[i] = prefixSum[i - 1] + indices[i];
        }

        for (let j = 0; j < n; j++) {
            let idx = indices[j];

            let left = j * idx - (j > 0 ? prefixSum[j - 1] : 0);

            let right = (prefixSum[n - 1] - prefixSum[j]) - (n - j - 1) * idx;

            result[idx] = left + right;
        }
    }

    return result;
};