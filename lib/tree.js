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
    // Space Complexity: O(log n)
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
    // Space Complexity: O(log n)
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

    // Time Complexity: O(n)
    // Space Complexity: O(log n)
    inorder() {
        return this.inOrderHelper(this.root, []);
        // this.inOrderHelper(current, values);
    }

    inOrderHelper(current, values) {
        if (!!current) {
            this.inOrderHelper(current.left, values);
            values.push({key: current.key, value: current.value});
            this.inOrderHelper(current.right, values);
        }
        return values;
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