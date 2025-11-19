/**
 * @param {number[]} nums
 * @return {number}
 */
var minElement = function(nums) {
    let res=Infinity;
    for(num of nums){
        let a = String(num);
        let sum=0
        for(let i=0;i<a.length;i++){
            sum+=Number(a[i]);
        }
        if(sum<res){
            res=sum
        }
    }
    return res

};