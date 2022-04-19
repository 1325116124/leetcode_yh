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
 * 树形动态递归
 */
var rob = function(root) {
    const res = robTree(root)
    return Math.max(res[0],res[1])
};

const robTree = (root) => {
    if(root === null) return [0,0]
    const left = robTree(root.left)
    const right = robTree(root.right)

    //不偷当前节点
    const val1 = Math.max(left[0],left[1]) + Math.max(right[0],right[1])
    // 偷当前节点
    const val2 = root.val + left[0] + right[0]
    return [val1,val2]
}