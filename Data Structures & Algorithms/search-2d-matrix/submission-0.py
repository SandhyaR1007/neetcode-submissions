class Solution:
    def searchMatrix(self, matrix: List[List[int]], target: int) -> bool:
        l,r = 0, len(matrix)-1
        while l<=r:
            mid = (l + r) // 2
            arr = matrix[mid]
            if arr[0] > target:
                r = mid - 1
            elif arr[-1] < target:
                l = mid + 1
            else:
                return self.binarySearch(arr, target)
        return False


    def binarySearch(self, arr:List[int], target:int)-> bool:
        l,r = 0, len(arr)-1
        while l<=r:
            mid = (l + r) // 2
            
            if arr[mid] == target:
               return True
            elif arr[mid] < target:
                l = mid + 1
            else:
                r = mid - 1
        return False
        