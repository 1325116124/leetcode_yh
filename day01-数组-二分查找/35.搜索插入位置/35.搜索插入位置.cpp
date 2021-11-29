#include <vector>;
#include <iostream>;
using namespace std;
class Solution
{
public:
    int searchInsert(vector<int> &nums, int target)
    {
        int right = nums.size() - 1;
        int left = 0;
        int mid = 0;
        while (left <= right)
        {
            mid = (right + left) / 2;
            if (nums[mid] < target)
            {
                left = mid + 1;
            }
            else if (nums[mid] > target)
            {
                right = mid - 1;
            }
            else
            {
                return mid;
            }
        }
        return left;
    }
};