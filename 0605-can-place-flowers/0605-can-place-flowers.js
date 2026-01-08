/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(flowerbed, n) {
    let len = flowerbed.length;

    if (len === 1) {
        return flowerbed[0] === 0 ? n <= 1 : n === 0;
    }

    if (flowerbed[0] === 0 && flowerbed[1] === 0) {
        n--;
        flowerbed[0] = 1;
    }

    if (flowerbed[len - 1] === 0 && flowerbed[len - 2] === 0) {
        n--;
        flowerbed[len - 1] = 1;
    }

    for (let i = 1; i < len - 1; i++) {
        if (
            flowerbed[i] === 0 &&
            flowerbed[i - 1] === 0 &&
            flowerbed[i + 1] === 0
        ) {
            flowerbed[i] = 1;
            n--;
        }
    }

    return n <= 0;
};
