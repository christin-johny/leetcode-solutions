/**
 * @param {number[]} nums
 * @return {boolean}
 */
var checkPrimeFrequency = function(nums) {
    let freq= new Map();
    for(let num of nums){
        freq.set(num,(freq.get(num)||0)+1);
    }
    function isPrime(n){
        if(n<2)return false;
        for(let i=2;i*i<=n;i++){
            if(n%i==0) return false
        }
        return true;
    }
    for(let num of freq.values()){
        if(isPrime(num)) return true
    };
    return false;
};