export class Info {
    count: number;
    next: string | null;
    pages: number;
    prev: string | null;

    constructor(count: number, next: string | null, pages: number, prev: string | null) {
        this.count = count;
        this.next = next;
        this.pages = pages;
        this.prev = prev;
    }
}
