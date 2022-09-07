class Fibonacci {
    constructor(a) {
        this.n1 = 0;
        this.n2 = 1;
        this.nextTerm = 0;
        this.sum = 0;
        this.a = a;
        this.n1 = 0;
        this.n2 = 1;
    }
    showFibonacci() {
        while (this.nextTerm <= this.a) {
            this.nextTerm = this.n1 + this.n2;
            this.n1 = this.n2;
            this.n2 = this.nextTerm;
            console.log(this.nextTerm);
            this.sum += this.nextTerm;
        }
        return this.sum;
    }
}
let fibonacci = new Fibonacci(5);
console.log(fibonacci.showFibonacci());
//# sourceMappingURL=sumFibo.js.map