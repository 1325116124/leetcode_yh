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
  const stack = []
  stack.push(root)
  let deep = 0
  while(stack.length) {
    const len = stack.length
    deep++;
    for(let i=0;i<len;i++) {
      const node = stack.shift()
      if(node.children.length) {
        for(let j=0;j<node.children.length;j++) {
          stack.push(node.children[j])
        }
      }
    }
  }
  return deep
};
