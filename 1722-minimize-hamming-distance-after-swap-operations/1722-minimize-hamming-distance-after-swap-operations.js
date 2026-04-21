/**
 * @param {number[]} source
 * @param {number[]} target
 * @param {number[][]} allowedSwaps
 * @return {number}
 */
var minimumHammingDistance = function(source, target, allowedSwaps) {
    
    // 🔹 Step 1: DSU (Union-Find)
    class DSU {
        constructor(n) {
            this.parent = Array.from({ length: n }, (_, i) => i);
        }
        
        find(x) {
            if (this.parent[x] !== x) {
                this.parent[x] = this.find(this.parent[x]);
            }
            return this.parent[x];
        }
        
        union(x, y) {
            let px = this.find(x);
            let py = this.find(y);
            if (px !== py) {
                this.parent[px] = py;
            }
        }
    }
    
    const n = source.length;
    const dsu = new DSU(n);
     
    for (let [a, b] of allowedSwaps) {
        dsu.union(a, b);
    }
     
    const groups = new Map();
    for (let i = 0; i < n; i++) {
        let parent = dsu.find(i);
        if (!groups.has(parent)) {
            groups.set(parent, []);
        }
        groups.get(parent).push(i);
    }
    
    let mismatch = 0;
     
    for (let indices of groups.values()) {
        const freq = new Map();
         
        for (let i of indices) {
            freq.set(source[i], (freq.get(source[i]) || 0) + 1);
        }
         
        for (let i of indices) {
            if (freq.get(target[i]) > 0) {
                freq.set(target[i], freq.get(target[i]) - 1);
            } else {
                mismatch++;
            }
        }
    }
    
    return mismatch;
};