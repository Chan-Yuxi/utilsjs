class TreeNode<T> {
  constructor(
    public left: TreeNode<T> | null,
    public right: TreeNode<T> | null,
    public value: T
  ) {}
}

export { TreeNode };
