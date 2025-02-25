interface ITreeNode<T> {
    value: T;
}

interface IBinaryTreeNode<T> extends ITreeNode<T> {
    l: BinaryTreeNode<T> | null;
    r: BinaryTreeNode<T> | null;
}

interface IQueue<T> {
    peek(): T | null;
    pop(): T | null;
    push(value: T): void;
    size(): number;
}

interface IStack<T> {
    peek(): T | null;
    pop(): T | null;
    push(value: T): void;
    size(): number;
}
