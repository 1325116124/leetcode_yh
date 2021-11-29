#include <iostream>;
#include <vector>;
using namespace std;
class Solution
{
public:
    int search(vector<int> &nums, int target)
    {
        int right = nums.size();
        int left = 0;
        while (left < right)
        {
            int mid = (right + left) / 2;
            if (nums[mid] < target)
            {
                left = mid;
            }
            else if (nums[mid] > target)
            {
                right = mid;
            }
            else
            {
                return mid;
            }
        }
        return -1;
    }
};