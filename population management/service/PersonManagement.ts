import {Person} from "../model/Person";

export class PersonManagement {
    input = require('readline-sync');
    listPerson: Person[] = [];
    mainMenu() {
        let choice: number;
        do {
            let menu = `1.Them nguoi \n2.Hien TT nguoi\n3.Hien so tinh`
            console.log(menu);
            choice = +this.input.question("Nhap lua chon cua ban ? : ")
            switch (choice) {
                case 1:
                    this.add()
                    break;
                case 2:
                    this.show()
                    break;
                case 3:
                    this.numberOfDistrict()
                    break;
            }
        }while (choice != 0)
    }

    add(){
        let idPerson = +this.input.question("nhap id: ");
        let namePerson = this.input.question("nhap ten: ");
        let agePerson = +this.input.question("nhap tuoi: ");
        let choice: number;
        let disPerson: string = '';
        do {
            choice = +this.input.question("1. MyDuc\n2. ChuongMy\n3. ThanhOai\n4. QuocOai\n5. UngHoa\nChon tinh:");
            switch (choice){
                case 1:
                    disPerson = 'MyDuc'
                    break;
                case 2:
                    disPerson = 'ChuongMy'
                    break;
                case 3:
                    disPerson = 'ThanhOai'
                    break;
                case 4:
                    disPerson = 'QuocOai'
                    break;
                case 5:
                    disPerson = 'UngHoa'
                    break;
                case 0:

                    break;
            }
        }while (choice < 0 || choice > 5)
        let person = new Person(idPerson,namePerson,agePerson,disPerson)
        this.listPerson.push(person)
    }

    show(){
        console.log(this.listPerson)
    }

    numberOfDistrict(){
    }
}


