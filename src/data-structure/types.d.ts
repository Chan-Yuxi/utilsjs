export interface ITreeNode<T> {
    value: T;
}

export class BinaryTreeNode<T> extends ITreeNode<T> {
    l: IBinaryTreeNode<T> | null;
    r: IBinaryTreeNode<T> | null;
}

export class Queue<T> {
    peek(): T | null;
    pop(): T | null;
    push(value: T): void;
    size(): number;
}

export class Stack<T> {
    peek(): T | null;
    pop(): T | null;
    push(value: T): void;
    size(): number;
}
