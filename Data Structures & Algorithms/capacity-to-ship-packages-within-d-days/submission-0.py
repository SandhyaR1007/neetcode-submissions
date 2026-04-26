class Solution:
    def shipWithinDays(self, weights: List[int], days: int) -> int:
        minCap = sum(weights)
        minW, maxW = max(weights), minCap
        while minW <= maxW:
            mid = (minW + maxW) // 2
            if self.isPos(weights, mid, days):
                minCap = min(minCap,mid)
                maxW = mid - 1
            else:
                minW = mid + 1
        return minCap



    def isPos(self, weights, cap, days):
        total,left = 0, 0
        for idx,i in enumerate(weights):
            if total + i > cap:
                days-=1
                total = i
            else:
                total+=i
            if days == 0:
                break
            left = idx
        return days >= 0 and (len(weights) - left - 1) <=0
        