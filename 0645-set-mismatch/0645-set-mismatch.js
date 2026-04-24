/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function(nums) {
    let seen = new Set();
    let duplicate;
    let n = nums.length;
    let sum = 0;

    for(let num of nums){
        if(seen.has(num)){
            duplicate = num;
        }
        seen.add(num);
        sum += num;
    }

    let expectedSum = n * (n + 1) / 2;
 
    let missing = expectedSum - sum + duplicate;

    return [duplicate, missing];
};