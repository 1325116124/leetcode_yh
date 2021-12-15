#include <iostream>
#include <vector>
#include <string.h>
using namespace std;
class Solution
{
public:
    bool backspaceCompare(string s, string t)
    {
        char stack[201];
        char stack2[201];
        int j = 0;
        int k = 0;
        for (int i = 0; i < s.length(); i++)
        {
            if (s[i] != '#')
            {
                stack[j++] = s[i];
            }
            else
            {
                if (j == 0)
                    continue;
                stack[j--] = ' ';
            }
        }
        for (int i = 0; i < t.length(); i++)
        {
            if (t[i] != '#')
            {
                stack2[k++] = t[i];
            }
            else
            {
                if (k == 0)
                    continue;
                stack2[k--] = ' ';
            }
        }
        cout << s.length() << " " << t.length();
        string s1 = string(stack).substr(0, j);
        string t1 = string(stack2).substr(0, k);
        if (s1 == t1)
            return true;
        else
            return false;
    }
};