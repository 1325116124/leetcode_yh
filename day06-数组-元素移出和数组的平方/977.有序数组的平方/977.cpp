#include <iostream>
#include <vector>
using namespace std;
class Solution
{
public:
    vector<int> sortedSquares(vector<int> &nums)
    {
        int left = 0;
        int right = nums.size() - 1;
        int pos = right;
        vector<int> ans(nums.size());
        while (left <= right)
        {
            if (nums[left] * nums[left] >= nums[right] * nums[right])
            {
                nums[pos] = nums[left] * nums[left];
                left++;
            }
            else
            {
                nums[pos] = nums[right] * nums[right];
                right--;
            }
            pos--;
        }
        return nums;
    }
};