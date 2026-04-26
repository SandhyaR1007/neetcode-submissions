class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const mpp =  new Map();
        for(let i = 0; i < nums.length; i++){
            if(!mpp.has(nums[i])) mpp.set(nums[i], i)
        }
        for(let i = 0; i < nums.length; i++){
            const req = target - nums[i];
            if(mpp.has(req) && mpp.get(req)!==i) return [mpp.get(req), i]
        }
        return [0,0]
    }
}
