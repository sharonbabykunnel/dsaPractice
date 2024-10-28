class Node{
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.size = 0
    }

    isEmpty() {
        return this.size === 0;
    }

    append(value){
        const node = new Node(value);
        if (this.isEpmty()) {
            this.head = node;
            this.tail = node;
        } else {
            this.tail.next = node;
            this.tail = node;
        }
        this.size ++;
    }

    prepend(value) {
        const node = new Node(value);
        if (this.isEmpty()) {
            this.head = node;
            this.tail = node;
        } else {
            node.next = this.head;
            this.head = node;
        }
        this.size++;
    }

    removeFromFront() {
        if (this.isEmpty()) {
            return null;
        } else if (!this.head.next) {
            const node = this.head;
            this.tail = null;
            this.size = 0;
            this.head = null;
            return node;
        }
        const node = this.head;
        this.head = this.head.next;
        return node;
    }
    
    removeFromEnd() {
        if (this.isEmpty()) {
            return null;
        } else if (!this.head.next) {
            const node = this.head;
            this.head = null;
            this.tail = null;
            this.size = 0;
            return node;
        }
        let node = this.head;
        while (node.next.next) {
            node = node.next;
        }
        const removed = node.next;
        this.tail = node
        this.tail.next = null;
        this.size--;
        return removed;
    }

    reverse() {
        let curr = this.head;
        let prev = null;
        let next = null
        while (curr) {
            next = curr.next;
            curr.next = prev;
            prev = curr;
            curr = next;
        }
        this.head = prev;
    }

    print() {
        if (this.isEmpty()) {
            console.log('List is empty');
            return
        }
        let curr = this.head;
        let result = '';
        while (curr) {
            result += curr.value + (curr.next ? '->' : '');
            curr = curr.next;
        }
        console.log(result);
    }

    insertAt(position, value) {
        if (position < 0 || position > this.size) {
            return false;
        }
        if (position == 0) {
           return this.prepend(value);
        }
        if (position == this.size) {
            return this.append(value);
        }

        let curr = this.head;
        let prev = null;
        let i = 0;
        const node = new Node(value);
        while (i < position) {
            prev = curr;
            curr = curr.next;
            i++;
        }
        prev.next = node;
        node.next = curr;
        this.size++;
        return true;
    }

    remove(data) {
        if (this.isEmpty()) {
            return null;
        }
        if (this.head.value === data) {
            const ele = this.head;
            this.head = this.head.next;
            this.size--;
            if (this.size === 0) this.tail = null;
            return ele;
        }
        let curr = this.head;
        while (curr) {
            if (curr.next.value === data) {
                const ele = curr.next;
                curr.next = curr.next.next;
                if (curr.next) {
                    this.tail = curr;
                }
                this.size--;
                return ele;
            }
            curr = curr.next;
        }
        return false;
    }

    hasCycle() {
        if (this.isEmpty()) {
            return null;
        }
        let fast = this.head;
        let slow = this.head;
        while (fast && fast.next) {
            fast = fast.next.next;
            slow = slow.next
            if (fast === slow) {
                return true;
            }
        }
        return false;
    }
}