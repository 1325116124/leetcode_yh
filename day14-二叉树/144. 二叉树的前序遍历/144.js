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
 * @return {number[]}
 */
var preorderTraversal = function(root) {
  // let res = []
  // const dfs = function (root) {
  //   if(root === null) return
  //   res.push(root.val)
  //   dfs(root.left)
  //   dfs(root.right)
  // }
  // dfs(root)
  // return res

  const stack = []
  const result = []
  if(root === null) return result
  stack.push(root)
  while(stack.length) {
    const res = stack.pop()
    result.push(res.val)
    if(res.right) stack.push(res.right)
    if(res.left) stack.push(res.left)
  }
  return result
};
