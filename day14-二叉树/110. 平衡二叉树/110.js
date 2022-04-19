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
 * @return {boolean}
 */
var isBalanced = function(root) {
  const getHeight = function (root) {
    if(root === null) return 0
    const leftHeight = getHeight(root.left)
    const rightHeight = getHeight(root.right)
    if(leftHeight === -1) return -1
    if(rightHeight === -1) return -1
    if(Math.abs(leftHeight - rightHeight) > 1) return -1
    else return 1 + Math.max(leftHeight,rightHeight)
  }
  return !(getHeight(root) === -1)
};
