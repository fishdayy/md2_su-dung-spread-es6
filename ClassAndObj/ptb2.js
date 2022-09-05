class QuadraticEquation {
    constructor(a, b, c) {
        this.a = a;
        this.b = b;
        this.c = c;
    }
    getDiscriminant(){
        return ((Math.pow(this.b,2)) - (4 * this.a * this.c))
    }
    getRoot1(){
        return ((-this.b + Math.sqrt(this.getDiscriminant())) / (2 * this.a))
    }
    getRoot2(){
        return ((-this.b - Math.sqrt(this.getDiscriminant())) / (2 * this.a))
    }
    getRoot3(){
        return ((-this.b) / (2 * this.a))
    }
}
let qua = new QuadraticEquation(1,5,4)
let delta = qua.getDiscriminant();
console.log(Math.sqrt(delta))

if(delta > 0){
    console.log('Phuong trinh co 2 nghiem la : '  + qua.getRoot1() + ' va ' + qua.getRoot2())
}

if( delta === 0){
    console.log('phuong trinh co 1 nghiem la : ' + qua.getRoot3())
}
if(delta < 0) {
    console.log('Phuong trinh vo nghiem')
}