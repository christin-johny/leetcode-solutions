/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var selfDividingNumbers = function(left, right) {
    let res=[];
    for(let i =left;i<=right;i++){
        let s = String(i);
        let counter =true
        if(s.length>0){
            for(let j=0;j<s.length;j++){
                if(!(i%Number(s[j])==0) || Number(s[j]) ==0){
                    counter =false;
                    break;
                }
            }
        if(counter){
            res.push(i)
        }
        }
        
    }
    return res;

};