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
 * @return {boolean}
 */
var hasPathSum = function(root, targetSum) {
  if(root === null) return false;
  let nodeArr = [root];
  let valArr = [0];
  while(nodeArr.length) {
    let curNode = nodeArr.shift();
    let curVal = valArr.shift();
    curVal += curNode.val;
    // 为叶子结点，且和等于目标数，返回true
    if (curNode.left === null && curNode.right === null && curVal === targetSum) {
      return true;
    }
    // 左节点，将当前的数值也对应记录下来
    if (curNode.left) {
      nodeArr.push(curNode.left);
      valArr.push(curVal);
    }
    // 右节点，将当前的数值也对应记录下来
    if (curNode.right) {
      nodeArr.push(curNode.right);
      valArr.push(curVal);
    }
  }
  return false;
};
