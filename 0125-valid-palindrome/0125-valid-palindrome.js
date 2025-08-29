/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let str='';
    s= s.toLowerCase();
    for(let i=0;i<s.length;i++){
        if(s[i]>='a' && s[i]<='z' || (s[i] >= '0' && s[i] <= '9'))
        str+=s[i];
    }
    return str == str.split('').reverse().join('')
};