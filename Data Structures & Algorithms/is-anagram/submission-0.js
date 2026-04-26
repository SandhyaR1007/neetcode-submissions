class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length !== t.length) return false;
        const mpp =  new Map();
        for(const char of s){
            mpp.set(char, (mpp.get(char)||0) + 1)
        }
        for(const char of t){
            if(!mpp.has(char)) return false;
            if(mpp.get(char) === 1){
                mpp.delete(char)
            }else{
                mpp.set(char, mpp.get(char)-1)
            }
        }
        return true
    }
}
