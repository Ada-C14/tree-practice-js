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

    // Time Complexity: O(n) worst case bit more often O(log n)
    // Space Complexity: O(1) 
    add(key, value) {
      let newNode = new TreeNode(key, value);

      if (!this.root) {
        this.root = newNode;
        return;
      }

      let current = this.root;
    
      while (current) {
        if (key <= current.key) {
          if(current.left) {
            current = current.left
          } else {
            current.left = newNode;
            return;
          }
        } else {
          if (current.right) {
            current = current.right;
          } else {
            current.right = newNode;
            return
          }
        }
      }
    }

    // Time Complexity: O(n) worst case bit more often O(log n)
    // Space Complexity: O(1)
    find(key) {
      let current = this.root;
      if (current === null) {
          return null;
      }

      while (current) {
        if (current.key === key) {
          return current.value;    
        } else if (current.key > key && current.left) {
          current = current.left;
        } else {
          current = current.right;
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