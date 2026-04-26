class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const feqMap = new Map()
        for(const n of nums){
            feqMap.set(n, (feqMap.get(n) || 0) + 1)
        }
        const entr = [...feqMap].sort(([k,v],[k1,v1])=>v1-v).map(([k,v])=>k)
        return entr.slice(0,k)

    }
}
