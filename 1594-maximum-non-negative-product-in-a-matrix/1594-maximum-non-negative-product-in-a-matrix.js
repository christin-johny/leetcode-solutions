/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxProductPath = function(grid) {
    const m = grid.length;
    const n = grid[0].length;
    const MOD = 1e9 + 7;

    const dpMax = Array.from({ length: m }, () => Array(n).fill(0));
    const dpMin = Array.from({ length: m }, () => Array(n).fill(0));

    dpMax[0][0] = dpMin[0][0] = grid[0][0];
 
    for (let j = 1; j < n; j++) {
        dpMax[0][j] = dpMin[0][j] = dpMax[0][j - 1] * grid[0][j];
    }
 
    for (let i = 1; i < m; i++) {
        dpMax[i][0] = dpMin[i][0] = dpMax[i - 1][0] * grid[i][0];
    }
 
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            const val = grid[i][j];

            const candidates = [
                dpMax[i - 1][j] * val,
                dpMin[i - 1][j] * val,
                dpMax[i][j - 1] * val,
                dpMin[i][j - 1] * val
            ];

            dpMax[i][j] = Math.max(...candidates);
            dpMin[i][j] = Math.min(...candidates);
        }
    }

    const result = dpMax[m - 1][n - 1];

    return result < 0 ? -1 : result % MOD;
};