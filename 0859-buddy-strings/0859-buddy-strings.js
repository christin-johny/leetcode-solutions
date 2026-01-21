/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
var buddyStrings = function(s, goal) {
    if (s.length !== goal.length) return false;
 
    if (s === goal) {
        const set = new Set(s);
        return set.size < s.length;  
    }
 
    let diff = [];

    for (let i = 0; i < s.length; i++) {
        if (s[i] !== goal[i]) {
            diff.push(i);
        }
    }

    if (diff.length !== 2) return false;

    let [i, j] = diff;
    return s[i] === goal[j] && s[j] === goal[i];
};