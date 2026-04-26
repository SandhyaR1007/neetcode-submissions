class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     * [1,2,8,48] 
     * [48,48,24,6] [48, 24, ]
     */
    productExceptSelf(nums) {
       let prefix = [nums[0]], suffix = [],res=[]
       for(let i=1; i < nums.length; i++){
        prefix[i] = nums[i] * prefix[i-1]
       }
       for(let i = nums.length-1; i>=0; i--){
        if(suffix[i+1]!==undefined){
            suffix[i] = nums[i]*suffix[i+1]
        }else{
            suffix[i] = nums[i]
        }
       }
       for(let i = 0; i < prefix.length; i++){
        if(i>0 && i < nums.length-1){
            res[i] = prefix[i-1] * suffix[i+1]
        }else if(i === 0){
            res[i] = suffix[i+1]
        }else{
            res[i] = prefix[i-1]
        }
       }

        return res
    }
}
