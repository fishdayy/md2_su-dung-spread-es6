class Ptbn {
    constructor(a, b) {
        this._a = a;
        this._b = b;
    }
    nghiem() {
        if (this.a == 0) {
            if (this.b == 0) {
                return 'vo so nghiem';
            }
            else {
                return 'vo nghiem';
            }
        }
        else {
            return (-this._b) / this._a;
        }
    }
    get a() {
        return this._a;
    }
    set a(value) {
        this._a = value;
    }
    get b() {
        return this._b;
    }
    set b(value) {
        this._b = value;
    }
}
let ptbn = new Ptbn(2, 1);
console.log(ptbn.nghiem());
//# sourceMappingURL=ptbn.js.map