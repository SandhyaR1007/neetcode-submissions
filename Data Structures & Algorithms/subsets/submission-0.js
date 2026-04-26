class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsets(nums) {
        let result = []
        function backtrack(path, index = 0){
            result.push([...path]);
            for(let i = index; i < nums.length; i++){
                path.push(nums[i]);
                backtrack(path, i + 1)
                path.pop()
            }
        }
        backtrack([],0)
        return result
    }
}
