class Solution {
    /**
     * @param {string[]} strs
     * @return {string}
     */
    longestCommonPrefix(strs) {
        strs.sort()
        const [f, l] = [strs[0], strs[strs.length-1]]
        let res = ""
       for(let i = 0; i < f.length; i++){
        if(f[i]!==l[i]) return res
        res+=f[i]
       }
       return res
    }
}
