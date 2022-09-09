import {LinkedListStudent} from "./LinkListStudents";

let student: LinkedListStudent = new LinkedListStudent();
student.insertFirstStudents('Tuan1',10);
student.insertLastStudents('Tuan2',9);
student.insertLastStudents('Tuan3',3);


console.log(student.readListStudent())
console.log(student.totalStudentsFail())
console.log(student.listStudentMaxScore())

