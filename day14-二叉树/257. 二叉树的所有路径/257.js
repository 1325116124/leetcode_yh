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
  const traversal = function (cur,path,result) {
    path.push(cur.val)
    if(!cur.left && !cur.right) {
      let s = ""
      for(let i=0;i<path.length-1;i++) {
        s += path[i]
        s += "->"
      }
      s += path[path.length-1]
      result.push(s)
      return
    }
    if(cur.left) {
      traversal(cur.left,path,result)
      path.pop()
    }
    if(cur.right) {
      traversal(cur.right,path,result)
      path.pop()
    }
  }
  const path = [],result = []
  traversal(root,path,result)
  return result
};
