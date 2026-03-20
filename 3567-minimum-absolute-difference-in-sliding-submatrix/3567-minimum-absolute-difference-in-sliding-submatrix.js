/**
 * @param {number[][]} grid
 * @param {number} k
 * @return {number[][]}
 */
var minAbsDiff = function(grid, k) {
    let m = grid.length;
    let n = grid[0].length;
    
    let result = [];

    for (let i = 0; i <= m - k; i++) {
        let row = [];
        
        for (let j = 0; j <= n - k; j++) {
            let arr = [];
 
            for (let x = i; x < i + k; x++) {
                for (let y = j; y < j + k; y++) {
                    arr.push(grid[x][y]);
                }
            }

            arr.sort((a, b) => a - b);

            let minDiff = Infinity;

            for (let t = 1; t < arr.length; t++) {
                if (arr[t] !== arr[t - 1]) {
                    minDiff = Math.min(minDiff, arr[t] - arr[t - 1]);
                }
            }
 
            if (minDiff === Infinity) minDiff = 0;

            row.push(minDiff);
        }

        result.push(row);
    }

    return result;
};