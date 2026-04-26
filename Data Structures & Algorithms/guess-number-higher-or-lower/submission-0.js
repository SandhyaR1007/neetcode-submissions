/**
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * function guess(num) {}
 */

class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    guessNumber(n) {
        let low = 0, high = n;
        while(low<=high){
            const mid  =  low + Math.floor((high - low)/2);
            const pick = guess(mid);
            console.log(pick, mid)
            if(pick === 0) return mid
            if(pick === 1){
                low = mid + 1
            }
            if(pick=== -1){
                high = mid - 1
            }
        }
        return high + 1
    }
}
