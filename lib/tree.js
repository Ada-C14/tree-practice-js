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

    addHelper(value) {
        const newNode = new TreeNode(value);
  
        if (this.root === null) {
          this.root = newNode;
        } else {
          this.addHelper(this.root, newNode);
        }
      }

    // Time Complexity: ?
    // Space Complexity: ?
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
 
      // insert left if key < root
    //   if (newNode.value < key.value) {
    //     // if node.left === null, insert here
    //     if (key.left === null) {
    //       key.left = newNode;
    //     } else {
    //       this.addHelper(key.left, newNode);
    //     }
    //   } else {
    //     // else 
    //     // insert key right of root
    //     if (key.right === null) {
    //       key.right = newNode;
    //     } else {
    //       this.addHelper(key.right, newNode);
    //     }   
    //   };   
    }

    // Time Complexity: ?
    // Space Complexity: ?
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

    // Time Complexity: ?
    // Space Complexity: ?
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

    // Time Complexity: ?
    // Space Complexity: ?
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

    // Time Complexity: ?
    // Space Complexity: ?
    postorder() {
      const values = [];
      let current = this.root;
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