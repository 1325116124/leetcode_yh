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
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
  if(root === null) return []
  const paths = ['']
  const stack = []
  const result = []
  stack.push(root)
  while(stack.length) {
    const node = stack.pop()
    let path = paths.pop()
    if(!node.left && !node.right) {
      path += node.val
      result.push(path)
      continue
    }
    path += node.val
    path += "->"
    if(node.right) {
      paths.push(path)
      stack.push(node.right)
    }
    if(node.left) {
      paths.push(path)
      stack.push(node.left)
    }
  }
  return result
};
