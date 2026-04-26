class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const mpp = new Map();
        for(const num of nums){
            mpp.set(num, (mpp.get(num)||0) + 1);
        }
        const bucket = Array.from({length: nums.length + 1}).fill(null).map(()=>[]);
        for(const [key, val] of mpp){
            bucket[val].push(key)
        }
        let res = []
        for(let i = bucket.length-1; i >=0; i--){
            if(res.length>=k) break
            if(bucket[i].length && res.length  < k){
                res.push(...bucket[i])
            }
        }
        return res
    }
}
