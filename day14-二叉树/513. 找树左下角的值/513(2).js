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
 * @return {number}
 */
var findBottomLeftValue = function(root) {
  let maxDep = 0,res = 0
  const traversal = function (node,deep) {
    if (!node.left && !node.right) {
      if (deep > maxDep) {
        maxDep = deep
        res = node.val
      }
    }
    node.left && traversal(node.left,deep+1)
    node.right && traversal(node.right,deep+1)
  }
  traversal(root,1)
  return res
};
