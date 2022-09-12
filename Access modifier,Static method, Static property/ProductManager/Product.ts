export class Product{
    private _name: string;
    private _price: number;

    constructor(name:string, price: number) {
        this._name = name;
        this._price = price;
    }


    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    get price(): number {
        return this._price;
    }

    set price(value: number) {
        this._price = value;
    }
}

export class ProductManager {
    private product = [];

    constructor() {
    }

    get getAll(){
        return this.product
    }
    
    set add(product){
        this.product.push(product)
    }
}