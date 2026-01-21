/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} source
 * @param {number} destination
 * @return {boolean}
 */
var validPath = function(n, edges, source, destination) {
 
    if (source === destination) return true;
 
    const graph = Array.from({ length: n }, () => []);
    for (let [u, v] of edges) {
        graph[u].push(v);
        graph[v].push(u);
    }
 
    const visited = new Array(n).fill(false);
    const queue = [source];
    visited[source] = true;

    while (queue.length > 0) {
        const node = queue.shift();

        for (let neighbor of graph[node]) {
            if (!visited[neighbor]) {
                if (neighbor === destination) return true;
                visited[neighbor] = true;
                queue.push(neighbor);
            }
        }
    }

    return false;
};