class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        let ans = new Map();
        for(let i = 0; i < nums.length; i++){
            this.twoSum(nums, [nums[i],i], ans)
        }
       
        return Array.from(ans.values())
    }
    twoSum(nums, [target, idx], ans){
        const mpp = new Map();
        for(let i = 0 ; i < nums.length; i++){
            mpp.set(nums[i],i)
        }
        let result = []
        for(let i = 0 ; i < nums.length; i++){
            const f = -(target + nums[i]);
            if(mpp.has(f)){
                if(mpp.get(f)!==i && mpp.get(f)!==idx && idx!==i){
                    const key = [target, -(target + nums[i]),nums[i]].sort((a,b)=>a-b).toString();
                    if(!ans.has(key)){
                        ans.set(key, [target, -(target + nums[i]),nums[i]])
                    }
                  
                }
            }
        }
      
    }
}
