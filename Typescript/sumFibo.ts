class Fibonacci{
    a: number;
    n1: number = 0;
    n2: number = 1;
    nextTerm: number = 0;
    sum: number =0;

    constructor(a:number) {
        this.a = a;
        this.n1 = 0;
        this.n2 = 1;
    }

    showFibonacci(){
        while (this.nextTerm <= this.a) {
            this.nextTerm = this.n1 + this.n2;
            this.n1 = this.n2;
            this.n2 = this.nextTerm;
            console.log(this.nextTerm)
            this.sum += this.nextTerm
        }
        return this.sum
    }
}

let fibonacci = new Fibonacci(5)
console.log(fibonacci.showFibonacci())