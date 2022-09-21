var BinarySearchTree = /** @class */ (function () {
    function BinarySearchTree() {
        this.root = null; // root node
    }
    BinarySearchTree.prototype.insertNode = function (parentNode, newNode) {
        if (newNode.value < parentNode.value) {
            //check the left child
            parentNode.left !== null
                ? this.insertNode(parentNode.left, newNode)
                : (parentNode.left = newNode);
        }
        else {
            // check the right child
            parentNode.right !== null
                ? this.insertNode(parentNode.right, newNode)
                : (parentNode.right = newNode);
        }
    };
    BinarySearchTree.prototype.insert = function (val) {
        var newNode = new Node();
        this.root !== null
            ? this.insertNode(this.root, newNode)
            : (this.root = newNode);
    };
    BinarySearchTree.prototype.printNode = function (node) {
        if (node.left !== null) {
            this.printNode(node.left); // traverse left subtree
        }
        console.log(node.value);
        if (node.right !== null) {
            this.printNode(node.right); // traverse right subtree
        }
    };
    BinarySearchTree.prototype.print = function () {
        this.root !== null
            ? this.printNode(this.root)
            : console.log('No nodes in the tree');
    };
    return BinarySearchTree;
}());
var bst1 = new BinarySearchTree();
bst1.insert(50);
bst1.insert(30);
bst1.insert(10);
bst1.insert(40);
bst1.insert(20);
bst1.insert(80);
bst1.insert(70);
bst1.insert(60);
bst1.insert(100);
bst1.insert(90);
bst1.print();
