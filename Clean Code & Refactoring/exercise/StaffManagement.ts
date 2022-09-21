import {Cadres} from "./Cadres";
import {Worker} from "./Worker";
import {Engineer} from "./Engineer";
import {Staff} from "./Staff";
import {Gender} from "./Cadres";

export class CadresManagement {
    static listCadres: Cadres[] = [];

    addCadres(cadres: Worker | Engineer | Staff): void{
        CadresManagement.listCadres.push(cadres)
    }

    findCadres(list: number){
        return CadresManagement.listCadres[list - 1];
    }

    showCadres(){
        return CadresManagement.listCadres
    }

    end(){
        return close()
    }
}