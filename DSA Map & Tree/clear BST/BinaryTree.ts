export class TreeNode<E> {
    public data: E;
    public left: TreeNode<E> | null;
    public right: TreeNode<E> | null;

    constructor(data: E) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

export interface Tree<E> {
    insert(data: E): TreeNode<E>;
    inorder(node: TreeNode<E>): void;
    getSize(): number;
}