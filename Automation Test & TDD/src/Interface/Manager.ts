interface Manager<T> {
    add(T): void;

    remove(id): void;

    search(name): string;

    show(): void;
}