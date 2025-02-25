export interface ITreeNode<T> {
    value: T;
}

export class BinaryTreeNode<T> implements ITreeNode<T> {
    value: T;
    l: BinaryTreeNode<T> | null;
    r: BinaryTreeNode<T> | null;
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
