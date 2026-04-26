class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    majorityElement(nums) {
        const mpp =  new Map();
        for(const num of nums){
            mpp.set(num, (mpp.get(num) || 0) + 1)
        }
        for(const [key, val] of mpp){
            if(val > nums.length / 2) return key
        }
    }
}
