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
var countNodes = function(root) {
  if(root === null) return 0
  let left = root.left
  let right = root.right
  let leftNode = 0,rightNode = 0
  while(left) {
    left = left.left
    leftNode++
  }
  while(right) {
    right = right.right
    rightNode++
  }
  if(rightNode === leftNode) {
    return Math.pow(2,leftNode+1) - 1
  }
  return countNodes(root.left) + countNodes(root.right) + 1
};
