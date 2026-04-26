class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const obj = {}, res = [];
        for(const num of nums){
            if(num in obj){
                obj[num]++
            }else{
                obj[num] = 1
            }
        }
        const entries = Object.entries(obj).sort((a,b)=>b[1]-a[1]);
        for(let i = 0; i < k; i++){
            res.push(Number(entries[i][0]))
        }

     return res
    }
}
