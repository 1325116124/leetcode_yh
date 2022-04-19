/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number}
 */
var maxDepth = function(root) {
  if(root === null) return 0
  return getDepth(root)
};

const getDepth = function (root) {
  if(root === null) return 0
  let deep = 0
  for(let i=0;i<root.children.length;i++) {
    deep = Math.max(deep,getDepth(root.children[i]))
  }
  return deep + 1
}
