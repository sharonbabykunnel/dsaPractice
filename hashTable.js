class hashTable{
    constructor() {
        this.table = {};
        this.capacity = 10;
    }

    add(key,value) {
        const index = this.hash(key);
        if (!this.table[index]) {
            this.table[index] = [];
        }
        this.table[index].push([key, value]);
    }

    remove(key) {
        const index = this.hash(key);
        if (!this.table[index]) {
            return null;
        }
        this.table[index].filter((item) => item[0] != key)
    }

    get(key) {
        const index = this.hash(key);
        if (!this.table[index]) {
            return null;
        }
        for (let [k, v] of this.table[index]) {
            if (k === key) return v;
        }
        return null;
    }

    resize() {
        const oldTable = this.table;
        this.table = {};
        this.capacity;
        Object.values(oldTable).forEach((bucket) => {
            bucket.forEach(([key, value]) => this.add(key, value))
        })
    }
    
    hash(value) {
        let total = 0
        for (let i = 0; i < value.length; i++){
            total += value.charCodeAt(i);
        }
        return total % this.capacity
    }
}