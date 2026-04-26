class Solution {
    /**
     * @param {number[]} nums
     * @return {void} Do not return anything, modify nums in-place instead.
     */
    sortColors(nums) {
        let z = 0, o = 0, t = 0;
        for(let i = 0; i < nums.length; i++){
            if(nums[i] === 0) {
                z++
                }else if(nums[i] === 1){
                    o++;
                }else{
                    t++;
                }
        }
        for(let i = 0; i < nums.length; i++){
            if(z>0) {
                nums[i] = 0
                z--
                }else if(o > 0){
                    nums[i] = 1
                    o--
                }else{
                    nums[i] = 2
                    t--
                }
        }
        
    }
}
