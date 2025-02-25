import assert from "assert";

import { Queue } from "../../dist/data-structure.js";

describe("test Queue", () => {
    it("should correctly report the size of the queue after pushing elements", () => {
        const queue = new Queue();
        queue.push(1);
        queue.push(2);
        queue.push(3);
        assert.equal(queue.size(), 3);
    });

    it("should correctly report the size of the queue after popping elements", () => {
        const queue = new Queue();
        queue.push(1);
        queue.push(2);
        queue.push(3);
        queue.pop();
        assert.equal(queue.size(), 2);
    });

    it("should return the correct element when popping from the queue", () => {
        const queue = new Queue();
        queue.push(1);
        queue.push(2);
        queue.push(3);
        assert.equal(queue.pop(), 1);
    });

    it("should return the correct element when peeking at the queue", () => {
        const queue = new Queue();
        queue.push(1);
        queue.push(2);
        queue.push(3);
        assert.equal(queue.peek(), 1);
    });
});
