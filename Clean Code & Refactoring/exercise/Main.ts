// import {CadresManagement} from "./StaffManagement";
// import {Worker} from "./Worker";
// import {Engineer} from "./Engineer";
// import {Staff} from "./Staff";
//
// let worker1: Worker = new Worker('tien dung',22,1,'hanoi',5);
// let engineer1: Engineer = new Engineer('tuan anh',25,1,'hanoi','Js');
// let staff1: Staff = new Staff('van hau',25,1,'hanoi','clean wc');
// let cadres: CadresManagement = new CadresManagement();
// cadres.addCadres(worker1)
// cadres.addCadres(engineer1)
// cadres.addCadres(staff1)
// console.log(cadres.findCadres(2))

let cadres = require('readline-sync');

let userName = cadres.question('nhap ten can bo');
console.log('Xin chào ' + userName + '!');