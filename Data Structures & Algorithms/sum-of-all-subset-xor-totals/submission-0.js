class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    subsetXORSum(nums) {
        let sum = 0
        function backtrack(path, index = 0){
            if(path.length){
                sum+=([...path].reduce((a,b)=>a^b,0))
            }
            for(let i = index; i < nums.length; i++){
                path.push(nums[i]);
                backtrack(path, i + 1);
                path.pop()
            }
          
        }
        backtrack([],0)
    return sum
    }
    
}
