export class Queue<T> {
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
