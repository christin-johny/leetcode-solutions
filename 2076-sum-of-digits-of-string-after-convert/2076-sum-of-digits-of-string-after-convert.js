/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var getLucky = function(s, k) {
    let str=''
    for(let i=0;i<s.length;i++){
        str +=(s.charCodeAt(i)-96);
    }
    while(k>0){
        let sum = 0;
         for(let i=0;i<str.length;i++){
        sum+= Number(str[i]);
         }
        str =sum.toString();
        k--;

    }
    return Number(str)
    }
  