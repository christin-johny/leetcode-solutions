/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var preorderTraversal = function(node=root,res=[]) {
    if(!node) return res;
    if(node){
        res.push(node.val);
        preorderTraversal(node.left,res);
        preorderTraversal(node.right,res)
    }
    return res;    
};