const Tree = require("../lib/tree");




describe("Tree", () => {
    let tree;
    let treeWithNodes;


    beforeEach(() => {
        tree = new Tree();
    });

    beforeAll(() => {
        treeWithNodes = new Tree();
        treeWithNodes.add(5, "Peter");
        treeWithNodes.add(3, "Paul");
        treeWithNodes.add(1, "Mary");
        treeWithNodes.add(10, "Karla");
        treeWithNodes.add(15, "Ada");
        treeWithNodes.add(25, "Kari");
    });

    it("can find and add values", () => {
        tree.add(5, "Peter");
        expect(tree.find(5)).toEqual("Peter");

        tree.add(15, "Ada");
        expect(tree.find(15)).toEqual("Ada");

        tree.add(3, "Paul");
        expect(tree.find(3)).toEqual("Paul");
    });

    it("can't find anything when the tree is empty", () => {
        expect(tree.find(50)).toBeNull();
    });

    describe("inorder", () => {
        it("will give an empty array for an empty tree", () => {
            expect(tree.inorder()).toEqual([]);
        });

        it("will return the tree in order", () => {
            expect(treeWithNodes.inorder()).toEqual([
                { key: 1, value: "Mary" }, { key: 3, value: "Paul" },
                { key: 5, value: "Peter" }, { key: 10, value: "Karla" },
                { key: 15, value: "Ada" }, { key: 25, value: "Kari" }]);
        });
    });

    describe("preorder", () => {
        it("will give an empty array for an empty tree", () => {
            expect(tree.preorder()).toEqual([]);
        });

        it("will return the tree in preorder", () => {
            expect(treeWithNodes.preorder()).toEqual([
                { key: 5, value: "Peter" }, { key: 3, value: "Paul" },
                { key: 1, value: "Mary" }, { key: 10, value: "Karla" },
                { key: 15, value: "Ada" }, { key: 25, value: "Kari" }]);
        });
    });

    describe("postorder", () => {
        it("will give an empty array for an empty tree", () => {
            expect(tree.postorder()).toEqual([]);
        });

        it("will return the tree in postorder", () => {
            expect(treeWithNodes.postorder()).toEqual([
                { key: 1, value: "Mary" }, { key: 3, value: "Paul" },
                { key: 25, value: "Kari" }, { key: 15, value: "Ada" },
                { key: 10, value: "Karla" }, { key: 5, value: "Peter" }]);
        });
    });


    describe.skip("breadth first search", () => {
        it("will give an empty array for an empty tree", () => {
            expect(tree.bfs()).toEqual([]);
        });

        it("will return an array of a level-by-level output of the tree", () => {
            expect(treeWithNodes.bfs()).toEqual([
                { key: 5, value: "Peter" }, { key: 3, value: "Paul" },
                { key: 10, value: "Karla" }, { key: 1, value: "Mary" },
                { key: 15, value: "Ada" }, { key: 25, value: "Kari" }]);
        });
    });

    describe("height", () => {
        it("will return 0 for an empty tree", () => {
            expect(tree.height()).toEqual(0);
        });

        it("will return 1 for a tree of height 1", () => {
            tree.add(100, "Simon")
            expect(tree.height()).toEqual(1);
        });

        it("will report the height of a balanced tree", () => {
            balancedTree = new Tree();

            balancedTree.add(5, "Peter");
            balancedTree.add(3, "Paul");
            balancedTree.add(4, "Kate");
            balancedTree.add(1, "Mary");
            balancedTree.add(10, "Karla");
            balancedTree.add(8, "Ada");
            balancedTree.add(25, "Kari");

            expect(balancedTree.height()).toEqual(3);
        });

        it("will report the height of an unbalanced tree", () => {
            let myTree = new Tree();

            myTree.add(100, "Calvin");
            myTree.add(110, "Simon");
            myTree.add(120, "Devin");
            myTree.add(130, "Janice");
            myTree.add(140, "Lauren");

            expect(myTree.height()).toEqual(5);

            myTree = new Tree();


            myTree.add(100, "Paula")
            myTree.add(90, "Ann")
            myTree.add(80, "Grace")
            myTree.add(70, "Hopi")
            myTree.add(60, "Pykasu")

            expect(myTree.height()).toEqual(5);
        });

    });

});