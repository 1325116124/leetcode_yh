#include <iostream>
#include <vector>
using namespace std;
class Solution
{
public:
    vector<int> searchRange(vector<int> &nums, int target)
    {
        int right = rightBorder(nums, target);
        int left = leftBorder(nums, target);
        if (right == -2 || left == -2)
            return {-1, -1};
        if (right - left > 1)
            return {left + 1, right - 1};
        return {-1, -1};
    }

private:
    int rightBorder(vector<int> &nums, int target)
    {
        int right = nums.size() - 1;
        int left = 0;
        int border = -2;
        while (left <= right)
        {
            int mid = (left + right) / 2;
            if (nums[mid] > target)
            {
                right = mid - 1;
            }
            else
            {
                left = mid + 1;
                border = left;
            }
        }
        return border;
    }
    int leftBorder(vector<int> &nums, int target)
    {
        int right = nums.size() - 1;
        int left = 0;
        int border = -2;
        while (left <= right)
        {
            int mid = (left + right) / 2;
            if (nums[mid] >= target)
            {
                right = mid - 1;
                border = right;
            }
            else
            {
                left = mid + 1;
            }
        }
        return border;
    }
};