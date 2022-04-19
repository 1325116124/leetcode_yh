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
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function(root, targetSum) {
  const dfs = function (node,count) {
    if(!node.left && !node.right && count === 0) return true
    if(!node.left && !node.right) return false
    if(node.left) {
      if(dfs(node.left,count - node.left.val)) return true
    }
    if(node.right) {
      if(dfs(node.right,count - node.right.val)) return true
    }
    return false
  }
  if (root == null) return false;
  return dfs(root,targetSum-root.val)
};
