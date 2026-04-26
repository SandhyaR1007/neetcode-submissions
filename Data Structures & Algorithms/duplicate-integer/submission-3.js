class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const st =  new Set();
        for(const n of nums){
            if(st.has(n)) return true
            st.add(n)
        }
        return false
    }
}
