/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let str = s.split(' ');
    return str.map(word=>word.split('').reverse().join('')).join(' ')
};