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

    // Time Complexity: ?
    // Space Complexity: ?
    // based on the tests the keys are numeric and the values are names - therefore we should sort/look-up by key
    add(key, value) {
        let newNode = new TreeNode(key, value);

        if (!this.root) {
            this.root = newNode;
            return;
        }

        let currNode = this.root; 

        // loop runs as long as nodes are in the binary tree
        while (currNode) {
            if (currNode.key >= key) {
                // check to see if a left node exists, otherwise, 
                if (currNode.left) {
                    currNode = currNode.left;
                } 
                else {
                    currNode.left = newNode;
                    return;
                }
            }
            else {
                if (currNode.right) {
                    currNode = currNode.right;
                }
                else {
                    currNode.right = newNode;
                    return;
                }
            }
        }
    }

    // Time Complexity: ?
    // Space Complexity: ?
    find(key) {
        if (!this.root) {
            return null;
        }

        let currNode = this.root;

        while (currNode) {
            if (currNode.key === key) {
                return currNode.value;
            }
            else if (currNode.key > key) {
                if (currNode.left) {
                    currNode = currNode.left;
                }
            }
            else {
                if (currNode.right) {
                    currNode = currNode.right;
                }
            }
        }
        return null;
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