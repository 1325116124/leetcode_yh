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
 * @return {TreeNode}
 */
var invertTree = function(root) {
  const invertNode = function (left,right) {
    let temp = left
    left = right
    right = temp
    root.left = left
    root.right = right
  }
  if(root === null) return root
  invertNode(root.left,root.right)
  invertTree(root.left)
  invertTree(root.right)
  return root
};
