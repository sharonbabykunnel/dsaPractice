class Heap{
    constructor() {
        this.heap = [];
    }

    getPerant(index) {
        return Math.floor((index - 1) / 2);
    }

    getLeft(index) {
        return index * 2 + 1;
    }

    getRight(index) {
        return index * 2 + 2;
    }

    swap(i, j) {
        [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
    }

    heapifyUp(index) {
        const parent = this.getPerant(index);

        if (this.heap[parent] > this.heap[index] && index >= 0) {
            this.swap(parent, index);
            this.heapifyUp(parent);
        }
    }

    heapifyDown(index) {
        const left = this.getLeft(index);
        const right = this.getRight(index);
        let small = index;

        if (left < this.heap.length && this.heap[left] < this.heap[index]) {
            small = left;
        }

        if (right < this.heap.length && this.heap[right] < this.heap[index]) {
            small = right;
        }

        if (small !== index) {
            this.swap(index, small);
            this.heapifyDown(small);
        }
    }

    insert(value) {
        this.heap.push(value)
        this.heapifyUp(this.heap.length - 1)
    }

    extractMin() {
        if (this.heap.length === 0) return null;
        if (this.heap.length === 1) {
            return this.heap.pop();
        }
        const min = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.heapifyDown(0)
        return min;
    }
}