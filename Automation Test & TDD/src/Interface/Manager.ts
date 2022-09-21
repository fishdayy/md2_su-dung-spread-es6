export interface Manager<T> {
    add(T);

    remove(id);

    search(name);

    show();
}