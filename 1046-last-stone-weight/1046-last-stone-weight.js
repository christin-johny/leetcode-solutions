/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function(stones) {
    while (stones.length > 1) { 
        stones.sort((a, b) => b - a);

        const y = stones.shift();
        const x = stones.shift();  

        if (y !== x) {
            stones.push(y - x);
        }
    }

    return stones.length === 1 ? stones[0] : 0;
};