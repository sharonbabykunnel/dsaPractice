class Queue {
  constructor() {
    this.queue = {};
    this.frontend = 0;
    this.backend = 0;
  }

  size() {
    return this.backend - this.frontend;
  }

  enqueue(value) {
    this.queue[this.backend] = value;
    this.backend++;
    return this.size();
  }

  dequeue() {
    if (this.empty()) {
      return null;
    }
    const value = this.queue[this.frontend];
    delete this.queue[this.frontend];
    this.frontend++;
    return value;
  }

  clear() {
    this.queue = {};
    this.frontend = 0;
    this.backend = 0;
  }

  empty() {
    return this.size() === 0;
  }

  peek() {
    if (this.empty()) {
      return null;
    }
    return this.queue[this.frontend];
  }
}

class circularQueue {
  constructor() {
    this.queue = {};
    this.frontend = 0;
    this.backend = 0;
    this.size = 0;
    this.capacity = 5; // Assuming capacity is 5 for the circular queue
  }

  getSize() {
    return this.size;
  }

  enqueue(value) {
    if (this.size === this.capacity) {
      return "Queue is full";
    }
    this.queue[this.backend] = value;
    this.backend = (this.backend + 1) % this.capacity;
    this.size++;
    return this.size;
  }

  dequeue() {
    if (this.isEmpty()) {
      return null;
    }
    const value = this.queue[this.frontend];
    delete this.queue[this.frontend];
    this.frontend = (this.frontend + 1) % this.capacity;
    this.size--;
    return value;
  }

  clear() {
    this.queue = {};
    this.frontend = 0;
    this.backend = 0;
    this.size = 0;
  }

  isEmpty() {
    return this.size === 0;
  }

  peek() {
    if (this.isEmpty()) {
      return null;
    }
    return this.queue[this.frontend];
  }
}
