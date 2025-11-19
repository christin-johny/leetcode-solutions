/**
 * @param {string} num
 * @return {boolean}
 */
var digitCount = function(num) {
    let map = new Map();

    for (let i = 0; i < num.length; i++) {
        map.set(num[i], (map.get(num[i]) || 0) + 1);
    }

    for (let i = 0; i < num.length; i++) {
        if (Number(num[i]) !== (map.get(String(i)) || 0)) {
            return false;
        }
    }

    return true;
};
