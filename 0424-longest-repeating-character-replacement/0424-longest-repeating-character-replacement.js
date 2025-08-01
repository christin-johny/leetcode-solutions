/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
function characterReplacement(s, k) {
    let left = 0;
    let maxFreq = 0;
    let count = new Array(26).fill(0);
    let result = 0;

    for (let right = 0; right < s.length; right++) {
        let index = s.charCodeAt(right) - 65;
        count[index]++;
        maxFreq = Math.max(maxFreq, count[index]);

        while ((right - left + 1) - maxFreq > k) {
            count[s.charCodeAt(left) - 65]--;
            left++;
        }

        result = Math.max(result, right - left + 1);
    }

    return result;
}
