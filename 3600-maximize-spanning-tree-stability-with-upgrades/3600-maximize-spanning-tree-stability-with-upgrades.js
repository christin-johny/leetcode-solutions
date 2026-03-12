/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} k
 * @return {number}
 */
var maxStability = function(n, edges, k) {

    class DSU {
        constructor(n){
            this.parent = Array.from({length:n}, (_,i)=>i);
            this.rank = Array(n).fill(0);
        }

        find(x){
            if(this.parent[x] !== x){
                this.parent[x] = this.find(this.parent[x]);
            }
            return this.parent[x];
        }

        union(x,y){
            let px = this.find(x);
            let py = this.find(y);

            if(px === py) return false;

            if(this.rank[px] < this.rank[py]){
                [px,py] = [py,px];
            }

            this.parent[py] = px;

            if(this.rank[px] === this.rank[py]){
                this.rank[px]++;
            }

            return true;
        }
    }

    const can = (x)=>{
        let dsu = new DSU(n);
        let used = 0;
        let upgrades = 0;

        let upgradeEdges = [];
        let normalEdges = [];
 
        for(let [u,v,s,must] of edges){

            if(must === 1){
                if(s < x) return false;

                if(!dsu.union(u,v)) return false;

                used++;
            }
            else{
                if(s >= x){
                    normalEdges.push([u,v]);
                }
                else if(s*2 >= x){
                    upgradeEdges.push([u,v]);
                }
            }
        }
 
        for(let [u,v] of normalEdges){
            if(used === n-1) break;

            if(dsu.union(u,v)){
                used++;
            }
        }
 
        for(let [u,v] of upgradeEdges){
            if(used === n-1) break;
            if(upgrades === k) break;

            if(dsu.union(u,v)){
                upgrades++;
                used++;
            }
        }

        return used === n-1;
    };

    let left = 1;
    let right = 200000;
    let ans = -1;

    while(left <= right){

        let mid = Math.floor((left + right) / 2);

        if(can(mid)){
            ans = mid;
            left = mid + 1;
        }else{
            right = mid - 1;
        }
    }

    return ans;
};