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
var sumOfLeftLeaves = function(root) {
  const traversal = function (node) {
    if(node === null) return 0
    if(node.left && !node.left.right && !node.left.left) {
      return node.left.val + traversal(node.right)
    }
    return traversal(node.left) + traversal(node.right)
  }
  return traversal(root)
};
