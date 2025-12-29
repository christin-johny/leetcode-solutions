/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var getLucky = function(s, k) {
    let str ='';
    let num = 0;
    for(let i=0;i<s.length;i++){
        str+= String(s.charCodeAt(i)-96);
    }
    for(let i=0;i<k;i++){
        num=0
        for(let j=0;j<str.length;j++){
            num += Number(str[j]);
        }
        str = String(num) 
    }
    return num;
};