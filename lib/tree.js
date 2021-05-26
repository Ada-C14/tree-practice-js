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

    // Time Complexity: O(n)
    // Space Complexity: O(log n)
    inorder() {
      return this.inOrderHelper(this.root, []);
    }

    inOrderHelper(current, arr) {
      if (!!current) {
        this.inOrderHelper(current.left, arr);
        arr.push({key: current.key, value: current.value});
        this.inOrderHelper(current.right, arr);
      }
      return arr;
    }

    



    // Time Complexity: O(n)
    // Space Complexity: O(log n)
    preorder() {
      return this.preOrderHelper(this.root, []);
    }

    preOrderHelper(current, arr) {
      if (!!current) {
        arr.push({key: current.key, value: current.value});
        this.preOrderHelper(current.left, arr); 
        this.preOrderHelper(current.right, arr);
      }
      return arr;
    }

    // Time Complexity: O(n)
    // Space Complexity: O(log n)
    postorder() {
      return this.postOrderHelper(this.root, []);
    }

    postOrderHelper(current, arr) {
      if (!!current) {
        this.postOrderHelper(current.left, arr); 
        this.postOrderHelper(current.right, arr);
        arr.push({key: current.key, value: current.value});
      }
      return arr;
    }

    // Time Complexity: ?
    // Space Complexity: ?
    height() {
      return this.heightHelper(this.root, 0);
    }

    heightHelper(current, height) {
      if (!current) return height;


        const leftHeight =  this.heightHelper(current.left, height + 1);
        const rightHeight =  this.heightHelper(current.right, height + 1);
   
        return leftHeight > rightHeight ? leftHeight : rightHeight;
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