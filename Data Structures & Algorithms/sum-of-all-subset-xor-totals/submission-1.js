class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    subsetXORSum(nums) {
        let sum = 0
        function backtrack(curr, index = 0){
           sum+=curr
            for(let i = index; i < nums.length; i++){
  
                backtrack(curr ^ nums[i], i + 1);

            }
          
        }
        backtrack(0,0)
    return sum
    }
    
}
