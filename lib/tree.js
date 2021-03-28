// watched this video to learn how to solve the height/depth-first-search and bfs problems: https://www.youtube.com/watch?v=Aagf3RyK3Lw
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

    // Time Complexity: Worst case, O(n) (the BST would be a structure similar to a linked list, just a linear chain of values). The BST grows exponentionally with respect to each level, so the total number of levels with respect to the total number of nodes is the inverse of an exponential - this is logarithmic growth. On average, this would be O(log(n)) because we are iterating through each level. On each level we only check one node - performing a constant number of operations. 
    // Space Complexity: O(1). We do not create a copy of the BST, we point to a node, and add a node.
    
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

    // Time Complexity: Worst case, O(n) (the BST would be a structure similar to a linked list. The BST grows exponentionally with respect to each level, so the total number of levels with respect to the total number of nodes is the inverse of an exponential - this is logarithmic growth. On average, this would be O(log(n)) because we are iterating through each level. On each level we only check one node - performing a constant number of operations. 
    // Space Complexity: O(1). We do not create a copy of the BST, we point to a node, and return the value of the node whose input key matches the node's key, otherwise we return null.
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

    // Time Complexity: O(n), one constant time operation for every node
    // Space Complexity: O(n), the array will be of length n, and a recursive function will be called for every node, (n number of stacks)
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


    // Time Complexity: O(n), one constant time operation for every node
    // Space Complexity: O(n), the array will be of length n, and a recursive function will be called for every node, (n number of stacks)
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

    // Time Complexity: O(n), one constant time operation for every node
    // Space Complexity: O(n), the array will be of length n, and a recursive function will be called for every node, (n number of stacks)
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

    // Time Complexity: O(n), every node has to be checked
    // Space Complexity: O(n) - worst case, if the BST is one long chain (skewed tree) then there will be n number of calls down the stack. On average, if the BST is more balanced, this can be O(log(n)) because the number of calls down the call stack will be logarithmic with respect to the number of nodes. The number of recursive calls will be at most the height of the tree.
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

    // Time Complexity: O(n), the while loop will run n number of times (depends on the number of nodes).
    // Space Complexity: O(n), the result array will be of length n (it will contain information about all the nodes). The temporary (temp) array will never be longer than length n.
    bfs() {
        let temp = [];
        let result = [];

        if (this.root) {
            temp.push(this.root);
            while (temp.length > 0) {
                let currNode = temp.shift();
                result.push({
                    key: currNode.key,
                    value: currNode.value
                })
                if (currNode.left) {
                    temp.push(currNode.left);
                }
                if (currNode.right) {
                    temp.push(currNode.right)
                }
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