class Node{
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

class BST{
    constructor() {
        this.root = null;
    }

    insert(val) {
        const node = new Node(val);
        if (this.isEmpty()) {
            this.root = node;
        }
        this._insert(this.root, val);

    }

    _insert(root, val) {
        if (root.val < val) {
            if (!root.left) {
                root.left = node;
            } else {
                this._insert(root.left, val);
            }
        } else {
            if (root.right) {
                root.right = node;
            } else {
                this._insert(root.right, val);
            }
        }
    }

    remove(val) {
        if (this.isEmpty()) {
            return null;
        }
        this._remove(this.root, val)
    }

    _remove(root, val) {
        if (!root) return root;
        if (val < root.val) {
            root.left = this._remove(root.left, val);
        } else if (val < root.val) {
            root.right = this._remove(root.right, val);
        } else {
            if (!root.right && !root.left) {
                return null;
            } else if (!root.left) {
                return root.right;
            } else if (!root.right) {
                return root.left;
            } else {
                root.val = this.min(root.right);
                root.right = this._remove(root.right, root.val);
            }
        }
        return root
    }

    search(val) {
        if (this.isEmpty()) {
            return null;
        }
        return this._search(this.root,val)
    }

    _search(root, val) {
        if (!root) {
            return false
        }
        if (root.val === val) {
            return true;
        }
        if (val < root.val) {
            return this._search(root.left, val);
        } else {
            return this._search(root.right,val)
        } 
    }

    isEmpty() {
        return this.root === null;
    }

    min(root) {
        while (root) {
            root = root.left
        }
        return root.val;
    }

    max(root) {
        while (root) {
            root = root.right;
        }
        return root.val;
    }

    preOrder() {
        const result = [];
        this._preOrder(this.root, result);
        return result;
    }

    _preOrder(root, result) {
        result.push(root.val);
        this._preOrder(root.left, result);
        this._preOrder(root.right, result);
    }

    inOrder() {
        const result = []
        this._inOrder(this.root, result);
        return result;
    }

    _inOrder(root, result) {
        this.inOrder(root.left, result);
        root.push(root.val);
        this._inOrder(root.right, result);
    }

    postOrder() {
        const result = [];
        this._postOrder(this.root, result)
        return result;
    }

    _postOrder(root, result) {
        this._postOrder(root.left, result);
        this._postOrder(root.right, result);
        result.push(root.val);
    }

    getSize() {
        let size = 0
        this._size(this.root, size);
        return this.size;
    }

    _size(root, size) {
        this._size(root.left, size);
        this._size(root.left, size);
        size++;
    }

    levelOrder() {
        if (this.isEmpty()) return [];
        const result = [];
        const queue = [this.root];
        while (queue.length) {
            const current = queue.shift();
            result.push(current.val);
            if (current.left) {
                queue.push(current.left);
            }
            if (current.right) {
                queue.push(current.right)
            }
        }
        return result

    }

    getHeight() {
        return this._getHeight(this.root);
    }

    _getHeight(root) {
        if (!root) return 0;
        return Math.max(this._getHeight(root.left), this._getHeight(root.right)) + 1;
    }
}