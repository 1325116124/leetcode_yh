class Solution {
    public boolean backspaceCompare(String S, String T) {
        return build(S).equals(build(T));
    }

    public String build(String str) {
        StringBuffer temp = new StringBuffer();
        for (int i = 0; i < str.length(); i++) {
            if (str.charAt(i) != '#') {
                temp.append(str.charAt(i));
            } else {
                if (temp.length() > 0)
                    temp.deleteCharAt(temp.length() - 1);
            }
        }
        return temp.toString();
    }
}