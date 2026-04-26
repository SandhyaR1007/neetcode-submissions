import math
class Solution:
    def minEatingSpeed(self, piles: List[int], h: int) -> int:
        low, high, ans = 1, max(piles), max(piles)
        while low <= high:
            mid = (low + high) // 2
            if self.isFeasible(piles, mid, h):
                ans = min(ans, mid)
                high = mid - 1
            else:
                low = mid + 1
        return ans

    def isFeasible(self, piles, k, h) -> bool:
        sum = 0
        for i in piles:
            sum+=math.ceil(i / k)
        return sum <= h

        