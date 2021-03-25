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
            if (key <= currNode.key) {
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
    // inorder: left, root, right


    inorder() {
        const array = [];

        if (!this.root) {
            return array;
        }

        let currNode = this.root;

        this.inOrderRec(currNode, array);
        return array;
    }

    inOrderRec(node, array) {
        if (!node) {
            return;
        }

        // left
        this.inOrderRec(node.left, array);

        // root
        array.push({
            key: node.key,
            value: node.value
        });

        // right
        this.inOrderRec(node.right, array);
    }


    // Time Complexity: ?
    // Space Complexity: ?
    // preorder: root, left, right
    preorder() {
        const array = []

        if (!this.root) {
            return array;
        }

        let currNode = this.root;

        this.preOrderRec(currNode, array);
        return array;
    }

    preOrderRec(node, array) {
        if (!node) {
            return;
        }

        // root
        array.push({
            key: node.key,
            value: node.value
        })

        // left
        this.preOrderRec(node.left, array);

        // right
        this.preOrderRec(node.right, array);
    }

    // Time Complexity: ?
    // Space Complexity: ?
    // postorder: left, right, root
    postorder() {
        const array = [];

        if (!this.root) {
            return array;
        }

        let currNode = this.root;

        this.postOrderRec(currNode, array);
        return array;
    }

    postOrderRec(node, array) {
        if (!node) {
            return;
        }

        // left
        this.postOrderRec(node.left, array);

        // right
        this.postOrderRec(node.right, array);

        // root
        array.push({
            key: node.key,
            value: node.value
        });
    }

    // Time Complexity: ?
    // Space Complexity: ?
    // watched this video to learn how to solve the height/depth-first-search problem: https://www.youtube.com/watch?v=Aagf3RyK3Lw
    height(node=this.root) {
        if (!node) {
            return 0;
        }

        let leftHeight = this.height(node.left);
        let rightHeight = this.height(node.right);

        if (leftHeight > rightHeight) {
            return leftHeight + 1;
        } else {
            return rightHeight + 1;
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