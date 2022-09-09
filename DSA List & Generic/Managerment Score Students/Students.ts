export class Students  {
    name: string;
    score: number;
    next: Students | null = null;

    constructor(name: string, score: number) {
        this.name = name;
        this.score = score;
    }

    readName() {
        return this.name;
    }

    readScore() {
        return this.score;
    }
}