class Solution {
    public int[] searchRange(int[] nums, int target) {
        int right = rightBorder(nums, target);
        int left = leftBorder(nums, target);
        if (left == -2 || right == -2)
            return new int[] { -1, -1 };
        if (right - left > 1)
            return new int[] { left + 1, right - 1 };
        return new int[] { -1, -1 };
    }

    private int leftBorder(int[] nums, int target) {
        int right = nums.length - 1;
        int left = 0;
        int border = -2;
        while (left <= right) {
            int mid = (left + right) / 2;
            if (nums[mid] >= target) {
                right = mid - 1;
                border = right;
            } else {
                left = mid + 1;
            }
        }
        return border;
    }

    private int rightBorder(int[] nums, int target) {
        int right = nums.length - 1;
        int left = 0;
        int border = -2;
        while (left <= right) {
            int mid = (left + right) / 2;
            if (nums[mid] <= target) {
                left = mid + 1;
                border = left;
            } else {
                right = mid - 1;
            }
        }
        return border;
    }
}