interface IQueue<T> {
    peek(): T | null;
    pop(): T | null;
    push(value: T): void;
    size(): number;
}

export class Queue<T> implements IQueue<T> {
    private data: T[] = [];

    peek(): T {
        return this.data[0];
    }

    pop(): T | null {
        if (this.data.length === 0) {
            return null;
        } else {
            return this.data.shift()!;
        }
    }

    push(value: T): void {
        this.data.push(value);
    }

    size(): number {
        return this.data.length;
    }
}
