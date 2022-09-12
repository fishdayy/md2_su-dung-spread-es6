interface IPriorityPatient<T> {
    enqueue(name: T, id: number): void
    dequeue(): T
    size(): number
    isEmpty(): boolean
}

export class PriorityPatient<T> implements IPriorityPatient<T> {

    data: [number, T][] = []

    dequeue(): T {
        if (this.isEmpty()) {
            return null
        }

        let min = this.data[0]
        let minIndex  = -1
        this.data.forEach((name, index) => {
            if (name[0] < min[0]) {
                min = name
                minIndex  = index
            }
        })

        this.data.splice(minIndex , 1)
        return min[1]
    }

    enqueue(name: T, id: number): void {
        this.data.push([id, name])
    }

    isEmpty(): boolean {
        return this.data.length === 0;
    }

    size(): number {
        return this.data.length;
    }
}
