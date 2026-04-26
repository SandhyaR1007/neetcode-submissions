class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    majorityElement(nums) {
        let cnt1 = 0, cnt2 = 0, ele1 = Infinity, ele2 = Infinity, res = [];
        for(const num of nums){
            if(num === ele1){
                cnt1++
            }else if(num === ele2){
                cnt2++
            }else{
                if(cnt1 === 0){
                    cnt1 = 1;
                    ele1 = num
                }else if(cnt2 === 0){
                    cnt2 = 1;
                    ele2 = num
                }else{
                    cnt1--;
                    cnt2--;
                }
            }
        }
        cnt1 = 0, cnt2 = 0;
        for(const num of nums){
             if(num === ele1){
                cnt1++
             }else if(num === ele2){
                cnt2++
             }
        }
        if(cnt1 > nums.length/3) res.push(ele1)
        if(cnt2 > nums.length/3) res.push(ele2)

        return res
    }
}
