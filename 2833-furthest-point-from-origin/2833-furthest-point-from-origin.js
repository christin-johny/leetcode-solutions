/**
 * @param {string} moves
 * @return {number}
 */
var furthestDistanceFromOrigin = function(moves) {
    let right = 0;
    let left = 0;

    for (const m of moves) {
        if (m === 'R' || m === '_') right++;
        else right--;

        if (m === 'L' || m === '_') left--;
        else left++;
    }

    return Math.max(Math.abs(right), Math.abs(left));
};
