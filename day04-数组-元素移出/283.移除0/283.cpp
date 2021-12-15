#include <iostream>
#include <vector>
using namespace std;
class Solution
{
public:
    void moveZeroes(vector<int> &nums)
    {
        int slow = 0, fast = 0, n = nums.size();
        while (fast < n)
        {
            if (nums[fast])
            {
                swap(nums[slow], nums[fast]);
                slow++;
            }
            fast++;
        }
    }
};