class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
      let str = "";
      for(const s of strs){
        str+=`${s.length}#${s}`
      }
      return str
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    // 4#neet4#code4#love3#you
    decode(str) {
        let i = 0, res = [];
        while(i < str.length){
            let j = i;
            while(str[j]!=="#"){
                j++;
            }
            const len = parseInt(str.slice(i,j), 10)
            j++;
            const word = str.slice(j,j + len);
            res.push(word);
            i = j + len

        }
        return res
    }
}
