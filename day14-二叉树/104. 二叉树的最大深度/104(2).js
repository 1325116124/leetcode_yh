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
var maxDepth = function(root) {
  if(root === null) return 0
  return getDeep(root)
};

const getDeep = function (node) {
  if(node === null) return 0
  const leftDep = getDeep(node.left)
  const rightDep = getDeep(node.right)
  return 1 + Math.max(leftDep,rightDep)
}
