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

    // Time Complexity: O(log(n) assuming the tree is balanced, because it would eliminate half the tree in each loop.  If not balanced, then it would be O(n), acting more like a linkedList.
    // Space Complexity: O(1)
    add(key, value) {
        if (!this.root) {
            const newNode = new TreeNode(key, value);
            this.root = newNode;
            return;
        }

        let current = this.root

        while (current) {
            if (key <= current.key) {
                if (!current.left) {
                    const newNode = new TreeNode(key, value);
                    current.left = newNode;
                    return;
                } else {
                    current = current.left;
                }
            } else { // the value is greater than current
                if (!current.right){
                    const newNode = new TreeNode(key, value);
                    current.right = newNode;
                    return;
                } else {
                    current = current.right;
                }
            }
        }
    }

    // Time Complexity: O(log(n)) - if a balanced tree, otherwise, O(n)
    // Space Complexity: O(1)
    find(key) {
        if (!this.root) return null;
        
        let current = this.root;

        while (current) {
            if (current.key === key) {
                return current.value;
            } else if (key < current.key) {
                current = current.left;
            } else {
                current = current.right;
            }
        }

        return null; // if key is not found
    }

    // Time Complexity: O(n) - touching every node
    // Space Complexity: O(n) - array is length n, and n number of recursive calls on the stack
    // inorder: left, current, right (left most nodes get pushed to list first, right last since it's largest)
    inorderHelper(current, array) {
        if (current) {
            this.inorderHelper(current.left, array);
            array.push({key: current.key, value: current.value});
            this.inorderHelper(current.right, array);
        }

        return array;
    }

    inorder() {
        return this.inorderHelper(this.root, [])
    }

    // Time Complexity: O(n)
    // Space Complexity: O(n)
    // preorder: current, left, right (parent nodes get pushed to list first)
    preorderHelper(current, array) {
        if (current) {
            array.push({key: current.key, value: current.value});
            this.preorderHelper(current.left, array);
            this.preorderHelper(current.right, array);
        }
        
        return array;
    }
    
    
    preorder() {
        return this.preorderHelper(this.root, [])
    }

    // Time Complexity: O(n)
    // Space Complexity: O(n)
    // Postorder: left, right, current (get children nodes get pushed to list first)
    postorderHelper(current, array) {
        if (current) {
            this.postorderHelper(current.left, array);
            this.postorderHelper(current.right, array);
            array.push({key: current.key, value: current.value});
        }

        return array;
    }

    postorder() {
        return this.postorderHelper(this.root, [])
    }

    // Time Complexity: O(n) - touches every node
    // Space Complexity: O(log(n)) - for the call stack? 
    height(current=this.root, count=0) {
        if (!current) {
            return count;
        } else {
            if (current.left) {
                return this.height(current.left, count + 1);
            } else if (current.right) {
                return this.height(current.right, count + 1);
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