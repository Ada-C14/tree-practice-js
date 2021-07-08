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
      // const newNode = new TreeNode(value);
      // if this.root === null
      // this.root = newNode;
      const newNode = new TreeNode(key, value);
  
      if (this.root === null) {
        this.root = newNode;
        return;
      } 
      
      // if root is not null
      // insert key to left if < key
      let current = this.root;

      while (current !== null) {
        // if current.value < key.value
        // insert left if null
        if (current.key === key) return undefined;
        if (key < current.key) {
          if (current.left === null) {
            current.left = newNode;
            return;
          }
          current = current.left;
        } else {
        // insert right

          if (current.right === null) {
            current.right = newNode;
            return;
          }
          current = current.right;
        }
      }  
    }

    // Time Complexity: O(log n)
    // Space Complexity: O(log n)
    find(key) {
      if (!this.root) return null; 

      let current = this.root;

      while (current) {
        if (key < current.key) {
          current = current.left;
        } else if (key > current.key) {
          current = current.right;
        } else {
          return current.value;
        }
      }

      return null;
    }

    // Time Complexity: O(n)?
    // Space Complexity: O(h) where h is the tree height?
    inorder() {
      // left, root, right
      const values = [];
      let current = this.root;

      if (!current) return values;

      this.inorderHelper(current, values);
      return values;
    }

    inorderHelper(current, values) {
    
      if (!current) return;

      this.inorderHelper(current.left, values);

      values.push({
        key: current.key,
        value: current.value
      });
    
      this.inorderHelper(current.right, values);
    }

    // Time Complexity: O(n)?
    // Space Complexity: O(h)
    preorder() {
      // root, left, right
      const values = [];
      let current = this.root;

      if (!current) return values;

      this.preorderHelper(current, values);
      return values;
    }

    preorderHelper(current, values) {
      if (!current) return;

      values.push({
        key: current.key,
        value: current.value
      });

      this.preorderHelper(current.left, values);
      this.preorderHelper(current.right, values);
    }

    // Time Complexity: O(n)?
    // Space Complexity: O(h)
    postorder() {
      // left, right, root
      const values = [];
      let current = this.root;

      if (!current) return values;

      this.postorderHelper(current, values);
      return values;
    }

    postorderHelper(current, values) {
      if (!current) return;

      this.postorderHelper(current.left, values);
      this.postorderHelper(current.right, values);

      values.push({
        key: current.key,
        value: current.value
      });
    }

    // Time Complexity: O(n)?
    // Space Complexity: O(h)?
    height() {
      if (this.root === null) return 0;

      return this.heightHelper(this.root, 1)
    }

    heightHelper(current, height) {
      if (current.left != null) {
        height = height + this.heightHelper(current.left, height);
      } else if (current.right != null) {
        height = height + this.heightHelper(current.right, height);
      };
      return height;
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