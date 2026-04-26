class Solution {
    /**
     * @param {number[]} nums
     * @param {number} val
     * @return {number}
     */
    removeElement(nums, val) {
        let arr = [];
        for(let i = 0; i < nums.length; i++){
            if(nums[i]!== val) arr.push(nums[i])
        }
        for(let i = 0;i < nums.length; i++){
            if(i < arr.length){
                nums[i] = arr[i]
            }else{
                nums[i] = val
            }
        }
        return arr.length
    }
    
}
