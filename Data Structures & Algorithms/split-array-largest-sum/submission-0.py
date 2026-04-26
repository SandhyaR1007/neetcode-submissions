class Solution:
    def splitArray(self, nums: List[int], k: int) -> int:
        l = max(nums)
        r = sum(nums)
        minSum = r
        while l <=r:
            mid = (l + r)//2
            target = 0
            count = 1
            for i in nums:
                target+=i
                if target > mid:
                    target =  i
                    count+=1
            if count <= k:
                minSum = min(mid, minSum)
                r = mid - 1
            else:
                l = mid + 1
        return minSum

                

        