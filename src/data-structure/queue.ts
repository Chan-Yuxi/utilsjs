export class Queue<T> {
    private data: T[] = [];

    peek(): T | null {
        return this.data[0] ?? null;
    }

    pop(): T | null {
        return this.data.shift() ?? null;
    }

    push(value: T): void {
        this.data.push(value);
    }

    size(): number {
        return this.data.length;
    }
}
