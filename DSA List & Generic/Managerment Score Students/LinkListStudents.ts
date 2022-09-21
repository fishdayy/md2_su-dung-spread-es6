import {Students} from "./Students";

export class LinkedListStudent{
    head: Students | null;
    tail: Students | null;
    size: number;

    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    insertFirstStudents(name: string,score: number): void {
        let fistStudent = new Students(name,score);
        fistStudent.next = this.head;
        this.head = fistStudent;

        if (!this.tail) {
            this.tail = fistStudent
        }
        this.size++;
    }

    insertLastStudents(name: string,score: number): void {
        if (!this.head){
            this.insertLastStudents(name,score);
        }else {
            let lastStudent = new Students(name,score);
            this.tail.next = lastStudent;
            this.tail = lastStudent;
            this.size++;
        }
    }

    readListStudent(){
        let listNameStudent = [];
        let currentStudent = this.head;
        while (currentStudent !== null) {
            listNameStudent.push(currentStudent);
            currentStudent = currentStudent.next
        }
        return listNameStudent;
    }

    totalStudentsFail(){
        let count = 0;
        let scoreStudent = this.head;
        for (let i = 0; i < this.readListStudent().length; i++){
            if (scoreStudent.readScore() <= 5 ) {
                count++
            }
            scoreStudent = scoreStudent.next
        }
        return count
    }

    listStudentMaxScore(){
        let scoreStudent = this.head;
        let maxScore = this.readListStudent()[0].score
        for (let i = 0; i < this.readListStudent().length; i++) {
            if (maxScore < this.readListStudent()[i].score){
                maxScore = this.readListStudent()[i].score
            }
            scoreStudent = scoreStudent.next
        }
        return maxScore
    }
}
