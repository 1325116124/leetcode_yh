#include <iostream>
using namespace std;
class Solution
{
public:
    bool isPerfectSquare(int num)
    {
        int right = num;
        int left = 0;
        while (left <= right)
        {
            int mid = (right + left) / 2;
            long res = (long)mid * mid;
            if (res == num)
            {
                return true;
            }
            else if (res < num)
            {
                left = mid + 1;
            }
            else
            {
                right = mid - 1;
            }
        }
        return false;
    }
};