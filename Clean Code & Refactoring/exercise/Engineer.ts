import {Cadres} from "./Cadres";
import {Gender} from "./Cadres";

export class Engineer extends Cadres {
    private _trainingIndustry: string;
    constructor(fullName: string, age: number, gender: Gender, address: string,trainingIndustry:string) {
        super(fullName, age, gender, address);
        this._trainingIndustry = trainingIndustry;
    }

    get trainingIndustry(): string {
        return this._trainingIndustry;
    }

    set trainingIndustry(value: string) {
        this._trainingIndustry = value;
    }
}