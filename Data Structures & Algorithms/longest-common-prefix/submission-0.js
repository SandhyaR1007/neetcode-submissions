class Solution {
    /**
     * @param {string[]} strs
     * @return {string}
     */
    longestCommonPrefix(strs) {
        if(strs.length=== 0) return "";
        strs.sort();
        const first = strs[0];
        const last = strs[strs.length - 1];
        let prefix = "";
        for( let i = 0; i < Math.min(first.length, last.length); i++){
            if(first[i]!==last[i]) return prefix;
            prefix+=first[i]
        }
        return prefix
    }
}
