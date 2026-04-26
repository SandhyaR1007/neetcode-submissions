class MyHashSet {
    constructor() {
        this.hashSet = {}
    }

    /**
     * @param {number} key
     * @return {void}
     */
    add(key) {
        if(!this.hashSet.hasOwnProperty(key)){
            this.hashSet[key] = undefined;
        }
    }

    /**
     * @param {number} key
     * @return {void}
     */
    remove(key) {
        if(this.hashSet.hasOwnProperty(key)){
            delete this.hashSet[key];
        }
    }

    /**
     * @param {number} key
     * @return {boolean}
     */
    contains(key) {
        return this.hashSet.hasOwnProperty(key)
    }
}

/**
 * Your MyHashSet object will be instantiated and called as such:
 * var obj = new MyHashSet()
 * obj.add(key)
 * obj.remove(key)
 * var param_3 = obj.contains(key)
 */
