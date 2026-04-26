class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    getConcatenation(nums) {
        let res = Array.from({length: 2 * nums.length - 1}).fill(0)
        for(let i = 0; i < nums.length; i++){
            res[i] = nums[i]
            res[i + nums.length] = nums[i]
        }
        return res
    }
}
