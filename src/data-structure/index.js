class TreeNode {
    constructor(left, right, value) {
        Object.defineProperty(this, "left", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: left
        });
        Object.defineProperty(this, "right", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: right
        });
        Object.defineProperty(this, "value", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: value
        });
    }
}
export { TreeNode };
