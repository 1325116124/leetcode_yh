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
 * @return {number[][]}
 */
var pathSum = function(root, targetSum) {
  const res = []
  const traversal = function (node,count,path) {

    if(!node.left && !node.right && count === 0) {
      res.push([...path])
      return
    }
    if(!node.left && !node.right) return
    if(node.left) {
      path.push(node.left.val)
      traversal(node.left,count - node.left.val,path)
      path.pop()
    }
    if(node.right) {
      path.push(node.right.val)
      traversal(node.right,count - node.right.val,path)
      path.pop()
    }
    return
  }
  if(!root) return res
  traversal(root,targetSum - root.val,[root.val])
  return res
};
