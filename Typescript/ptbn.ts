class Ptbn{
    private _a:number;
    private _b:number;
    constructor(a:number, b:number) {
        this._a = a;
        this._b = b;
    }
     nghiem(){
        if (this.a == 0){
            if (this.b == 0) {
                return 'vo so nghiem'
            }else {
                return 'vo nghiem'
            }
        }
        else {
            return (-this._b) / this._a
        }
    }

    get a(): number {
        return this._a;
    }

    set a(value: number) {
        this._a = value;
    }

    get b(): number {
        return this._b;
    }

    set b(value: number) {
        this._b = value;
    }
}
let ptbn = new Ptbn(2,1);
console.log(ptbn.nghiem())