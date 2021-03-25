class TreeNode {
    constructor(key, value) {
        this.key = key;
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class Tree {
    constructor() {
        this.root = null;
    }

    // Time Complexity: O(log n)
    // Space Complexity: O(1)
    add(key, value) {
        const newNode = new TreeNode(key, value);
        if (!this.root) {
            this.root = newNode;
        } else {
            this.addHelper(this.root, newNode);
        }
    }
    
    addHelper(current, newNode) {
        if (!current) {
            return newNode;
        } else {
            if (current.key > newNode.key) {
                current.left = this.addHelper(current.left, newNode);
            } else if (current.key <= newNode.key) {
                current.right = this.addHelper(current.right, newNode);
            }
        }

        return current;
    }

    // Time Complexity: O(log n)
    // Space Complexity: O(1)
    find(key) {
        if (!this.root) {
            return null;
        } else {
            return this.findHelper(this.root, key);
        }
    }

    findHelper(current, key) {
        if (!current) {
            return false;
        } else { 
            if (current.key == key) {
                return current.value;
            } else if (current.key > key) {
                return (this.findHelper(current.left, key));            
            } else if (current.key < key) {
                return (this.findHelper(current.right, key));            
            }
        }
    }

    // Time Complexity: ?
    // Space Complexity: ?
    inorder() {
        throw new Error("This method hasn't been implemented yet!");
    }

    // Time Complexity: ?
    // Space Complexity: ?
    preorder() {
        throw new Error("This method hasn't been implemented yet!");
    }

    // Time Complexity: ?
    // Space Complexity: ?
    postorder() {
        throw new Error("This method hasn't been implemented yet!");
    }

    // Time Complexity: ?
    // Space Complexity: ?
    height() {
        throw new Error("This method hasn't been implemented yet!");
    }

    // Time Complexity: ?
    // Space Complexity: ?
    bfs() {
        throw new Error("This method hasn't been implemented yet!");
    }

    // Useful for printing
    toString() {
        return `${this.inorder()}`
    }
}

module.exports = Tree;