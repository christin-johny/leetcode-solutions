/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minOperations = function(nums, k) {
    let set =new Set()
    for(let i=1;i<=k;i++){
        set.add(i)
    }
    let count=0;
    for(let i=nums.length-1;i>=0;i--){
        count++;
        if(set.has(nums[i])){
            set.delete(nums[i])
        }

        if(set.size == 0) break;
    }
    return count
    
};