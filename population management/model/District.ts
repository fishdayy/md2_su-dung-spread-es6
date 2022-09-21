export class District {
    private _idDistrict: number;
    private _nameDistrict: string;
    private _population: number;
    private _gdp: number;

    constructor(idDistrict: number, nameDistrict: string, population: number, gdp: number) {
        this._idDistrict = idDistrict;
        this._nameDistrict = nameDistrict;
        this._population = population;
        this._gdp = gdp;
    }

    get idDistrict(): number {
        return this._idDistrict;
    }

    set idDistrict(value: number) {
        this._idDistrict = value;
    }


    get nameDistrict(): string {
        return this._nameDistrict;
    }

    set nameDistrict(value: string) {
        this._nameDistrict = value;
    }

    get population(): number {
        return this._population;
    }

    set population(value: number) {
        this._population = value;
    }

    get gdp(): number {
        return this._gdp;
    }

    set gdp(value: number) {
        this._gdp = value;
    }
}