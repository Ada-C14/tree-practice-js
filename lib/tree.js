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

    // Time Complexity: O(log n) -- assuming the tree is balanced, as the number of nodes increases
    // the number of times addHelper has to be called will only increase logarithmically
    // Space Complexity: O(log n) -- assuming the tree is balanced, the number of calls to addHelper
    // that will be on the stack at one time increases logarithmically, rather than linearly
    add(key, value) {
        const newNode = new TreeNode(key, value);

        if (this.root === null) {
            this.root = newNode;
            return;
        } else {
            const currentNode = this.root;
            return this.addHelper(newNode, currentNode);
        }
    }

    addHelper(newNode, currentNode) {
        if (newNode.key > currentNode.key && currentNode.right === null) {
            currentNode.right = newNode;
            return;
        } else if (newNode.key <= currentNode.key && currentNode.left === null) {
            currentNode.left = newNode;
            return;
        } else if (newNode.key > currentNode.key) {
            return this.addHelper(newNode, currentNode.right);
        } else {
            return this.addHelper(newNode, currentNode.left);
        }
    }

    // Time Complexity: O(log n) -- assuming the tree is balanced, as tree increases in size,
    // the number of times findHelper has to be called will only increase logarithmically
    // Space Complexity: O(log n) -- assuming the tree is balanced, the number of calls to findHelper
    // on the stack at one time increases logarithmically
    find(key) {
        const current = this.root;
        return this.findHelper(key, current);
    }

    findHelper(key, current) {
        if (current === null) return null 
        if (current.key === key) return current.value

        if (current.key < key) {
            return this.findHelper(key, current.right);
        } else {
            return this.findHelper(key, current.left);
        }
    }

    // Time Complexity: O(n). Method needs to visit every node in the tree
    // Space Complexity: O(log n). The number of function calls on the stack will only be as great
    // as the maximum height of the tree, which increases logarithmically to # of nodes (assuming balanced)
    inorder() {
        return this.inorderHelper(this.root, []);
    }

    inorderHelper(current, inorderList) {
        if (current === null) return inorderList;

        const leftBranch = this.inorderHelper(current.left, inorderList);
        leftBranch.push({key: current.key, value: current.value});
        const rightBranch = this.inorderHelper(current.right, leftBranch);
        return rightBranch;
    }

    // Time Complexity: O(n). Method needs to visit every node in the tree
    // Space Complexity: O(log n). The number of function calls on the stack will only be as great
    // as the maximum height of the tree, which increases logarithmically to # of nodes (assuming balanced)
    preorder() {
        return this.preorderHelper(this.root, []);
    }

    preorderHelper(current, preorderList) {
        if (current === null) return preorderList;

        preorderList.push({key: current.key, value: current.value});
        const leftBranch = this.preorderHelper(current.left, preorderList);
        const rightBranch = this.preorderHelper(current.right, leftBranch);
        return rightBranch;
    }

    // Time Complexity: O(n). Method needs to visit every node in the tree
    // Space Complexity: O(log n). The number of function calls on the stack will only be as great
    // as the maximum height of the tree, which increases logarithmically to # of nodes (assuming balanced)
    postorder() {
        return this.postorderHelper(this.root, []);
    }

    postorderHelper(current, postorderList) {
        if (current === null) return postorderList;

        const leftBranch = this.postorderHelper(current.left, postorderList);
        const rightBranch = this.postorderHelper(current.right, leftBranch);
        postorderList.push({key: current.key, value: current.value});
        return postorderList
    }

    // Time Complexity: O(n). Method needs to follow every branch to its end
    // and therefore visits every node.
    // Space Complexity: O(log n). The max number of function calls on the stack will
    // only be the maximum height of the tree, which scales logarithmically to the 
    // size of the tree (if balanced)
    height() {
        return this.heightHelper(this.root, 0)
    }

    heightHelper(currentNode, count) {
        if (currentNode === null) return count

        const rightBranch = this.heightHelper(currentNode.right, count + 1);
        const leftBranch = this.heightHelper(currentNode.left, count + 1);

        if (rightBranch > leftBranch) {
            return rightBranch;
        } else {
            return leftBranch;
        }
    }

    // Time Complexity: O(n). The method needs to visit every node in the tree so the time taken
    // will increase linear to the size of the tree increasing.
    // Space Complexity: O(n). The size of the queue at any point in time will increase logarithmically
    // with the size of the tree, but the results array will increase linear to the size of the tree.
    bfs() {
        const queue = [ this.root ];
        const result = [];

        for (const node of queue) {
            if (node) {
                result.push({key: node.key, value: node.value});
                queue.push(node.left, node.right);
            }
        }

        return result;
    }

    // Useful for printing
    toString() {
        return `${this.inorder()}`
    }
}

module.exports = Tree;