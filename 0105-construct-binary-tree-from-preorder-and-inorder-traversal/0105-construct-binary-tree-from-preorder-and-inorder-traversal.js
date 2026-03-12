/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {

    let map = new Map();

    for(let i = 0; i < inorder.length; i++){
        map.set(inorder[i], i);
    }

    let preorderIndex = 0;

    function build(left, right){

        if(left > right) return null;

        let rootVal = preorder[preorderIndex++];
        let root = new TreeNode(rootVal);

        let mid = map.get(rootVal);

        root.left = build(left, mid - 1);
        root.right = build(mid + 1, right);

        return root;
    }

    return build(0, inorder.length - 1);
};