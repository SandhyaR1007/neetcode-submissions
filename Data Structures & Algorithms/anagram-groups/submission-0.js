class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let result =  new Map();
        for(const str of strs){
            const key = JSON.stringify(prepareKey(str));
            if(result.has(key)){
                result.set(key, [...result.get(key), str])
            }else{
                result.set(key,[str])
            }
        }
        let ans = [];
        for(const [key, value] of result){
            ans.push(value)
        }
        return ans
    }
    

}

function prepareKey(strs){
    const hash =  new Array(26).fill(0);
    for(let i = 0; i < strs.length; i++){
        hash[strs[i].charCodeAt() - 97]++;
    }
    
    return hash
}