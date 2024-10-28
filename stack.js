class stack {
    constructor() {
        this.stack = [];
        this.size = 0;
    }

    push(value) {
        this.stack.push(value);
        this.size++;
        return this.size;
    }

    pop() {
        if (this.isEmpty()) {
            return null
        }
        const value = this.stack.pop()
        this.size--;
        return value
    }

    peek() {
        if (this.isEmpty()) {
            return null
        }
        return this.stack[this.stack.length - 1]
    }

    getSize() {
        return this.size;
    }

    isEmpty() {
        return this.size === 0; 
    }
}