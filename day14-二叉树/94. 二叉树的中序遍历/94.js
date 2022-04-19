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
var inorderTraversal = function(root) {
  // let res = []
  // const dfs = function (root) {
  //   if(root === null) return
  //   dfs(root.left)
  //   res.push(root.val)
  //   dfs(root.right)
  // }
  // dfs(root)
  // return res

  const stack = []
  const result = []
  let cur = root
  while(cur || stack.length) {
    if(cur) {
     stack.push(cur)
     cur = cur.left
    } else {
      cur = stack.pop()
      result.push(cur.val)
      cur = cur.right
    }
  }
  return result
};
