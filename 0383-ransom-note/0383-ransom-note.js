/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    let count = new Array(26).fill(0);

    for (let char of magazine) {
        count[char.charCodeAt(0) - 97]++;
    }

    for (let char of ransomNote) {
        let index = char.charCodeAt(0) - 97;

        if (count[index] === 0) {
            return false;
        }

        count[index]--;
    }

    return true;
};