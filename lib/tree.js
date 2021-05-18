const treeify = require('treeify')

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
    add(key, value) {
        const newNode = new TreeNode(key, value)
        if(!this.root){
            this.root = newNode
            return this
        }
        let current = this.root;
        function addNode(){
            if(key === current.key) return undefined
            if(key < current.key){
                if(!current.left){
                    current.left = newNode
                    return this
                }
                current = current.left 
                addNode()
            } else if(key > current.key){
                if(!current.right){
                    current.right = newNode
                    return this
                }
                current = current.right
                addNode()
            }
            }
            addNode()
        }




    // Time Complexity: ?
    // Space Complexity: ?
    find(key) {
        if(!this.root) return null;

        let current = this.root;

        function findNode(){
            if(current.key === key) {
                return current.value
            }
            else if(key < current.key){
                    current = current.left
                    console.log(current)
                    return findNode()
                } 
            else if (key > current.key){
                    current = current.right
                    console.log(current)
                    return findNode()
            } else {
                return null
            }
                
            }
            return findNode()
            }
            

    // Time Complexity: ?
    // Space Complexity: ?
    inorder() {
        return this.inorderHelper(this.root, [])
    }

    inorderHelper(current, result) {
    if (current) {
        this.inorderHelper(current.left, result);
        result.push({key: current.key, value: current.value});
        this.inorderHelper(current.right, result);
    }
    return result
}
    
    // Time Complexity: ?
    // Space Complexity: ?
    preorder() {
       return this.preorderHelper(this.root, [])
    }

    preorderHelper(current, result) {
        if (current) {
            result.push({key: current.key, value: current.value});
            this.preorderHelper(current.left, result);
            this.preorderHelper(current.right, result);
            
        }

        return result;
    }

    // Time Complexity: ?
    // Space Complexity: ?
    postorder() {
        return this.postorderHelper(this.root, [])
    }

    postorderHelper(current, result){
        if (current) {
            this.postorderHelper(current.left, result);
            this.postorderHelper(current.right, result);
            result.push({key: current.key, value: current.value});
    }
    return result
}

    // Time Complexity: ?
    // Space Complexity: ?
    height() {
      return this.heightHelper(this.root, 0)
    }

    heightHelper(current, tally) {
        if (current === null) return tally

        const right = this.heightHelper(current.right, tally + 1);
        const left = this.heightHelper(current.left, tally + 1);

        if (right > left) {
            return right;
        } else {
            return left;
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
//     const tree = new Tree()
//     tree.root = new TreeNode(32, "eggs")
//     tree.add(20,"Peter")
//     tree.add(10, "Janelle")
//     tree.add(5, "Henry")
//     tree.add(15, "Baldwin")
//     // tree.add(30, "Jarah")
//     // tree.add(25, "Sarold")
//     // tree.add(32, "Ramen")
//     // tree.add(32, "elsa")

// console.log(tree.find(15, "Baldwin"))
  


module.exports = Tree;