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
        return this.inorderHelper(this.root, []);
    }
    inorderHelper(current, values) {
        if (!!current) {
            this.inorderHelper(current.left, values);
            values.push({key: current.key, value: current.value});
            this.inorderHelper(current.right, values);
        }
        return values;
    }

    // Time Complexity: O(n)
    // Space Complexity: O(log n)
    preorder() {
        return this.preorderHelper(this.root, []);
    }
    preorderHelper(current, values) {
        if (!!current) {
            values.push({key: current.key, value: current.value});
            this.preorderHelper(current.left, values);
            this.preorderHelper(current.right, values);
        }
        return values;
    }

    // Time Complexity: O(n)
    // Space Complexity: O(log n)
    postorder() {
        return this.postorderHelper(this.root, []);
    }
    postorderHelper(current, values) {
        if (!!current) {
            this.postorderHelper(current.left, values);
            this.postorderHelper(current.right, values);
            values.push({key: current.key, value: current.value});
        }
        return values;
    }

    // Time Complexity: O(log n)
    // Space Complexity: O(log n)
    height() {
        return this.heightHelper(this.root, 0);        
    }

    heightHelper(current, count){
        if (!current) {
            return count;
        } else {
            if (!!current.left) {
                return this.heightHelper(current.left, count + 1);
            } else if (!!current.right) {
                return this.heightHelper(current.right, count + 1);
            } else {
                return count + 1;
            }
        } 
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