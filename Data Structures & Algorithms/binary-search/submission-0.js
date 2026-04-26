class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        let low = 0, high = nums.length - 1;
        while(low<=high){
            const mid = low  + Math.floor((high - low)/2);
            if(target === nums[mid]) return mid;
            if(target < nums[mid]){
                high = mid - 1
            }
            if(target > nums[mid]){
                low = mid + 1
            }
        }
        return -1
    }
}
