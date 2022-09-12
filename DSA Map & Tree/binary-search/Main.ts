import {BinaryTree} from "./BinaryTree";

let tree = new BinaryTree<number>();
tree.insert(6);
tree.insert(5);
tree.insert(7);
tree.insert(3);
tree.insert(4);
tree.insert(1);
tree.insert(2);
tree.insert(10);
tree.insert(8);
tree.insert(9);

console.log(`The numbers of nodes ${tree.totalNode}`)
tree.inorder(tree.root)