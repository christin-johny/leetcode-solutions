/**
 * @param {number[][]} grid
 * @return {number[]}
 */
var getBiggestThree = function(grid) {
    const m = grid.length;
    const n = grid[0].length;

    const sums = new Set();

    for (let r = 0; r < m; r++) {
        for (let c = 0; c < n; c++) {
 
            sums.add(grid[r][c]);
 
            for (let k = 1; r + 2*k < m && c-k >= 0 && c+k < n; k++) {

                let sum = 0;

                let x = r;
                let y = c;
 
                for (let i = 0; i < k; i++) {
                    sum += grid[x+i][y+i];
                }
 
                for (let i = 0; i < k; i++) {
                    sum += grid[x+k+i][y+k-i];
                }
 
                for (let i = 0; i < k; i++) {
                    sum += grid[x+2*k-i][y-i];
                }
 
                for (let i = 0; i < k; i++) {
                    sum += grid[x+k-i][y-k+i];
                }

                sums.add(sum);
            }
        }
    }

    return [...sums].sort((a,b)=>b-a).slice(0,3);
};