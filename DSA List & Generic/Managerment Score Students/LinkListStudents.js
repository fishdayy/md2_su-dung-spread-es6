"use strict";
exports.__esModule = true;
exports.LinkedListStudent = void 0;
var Students_1 = require("./Students");
var LinkedListStudent = /** @class */ (function () {
    function LinkedListStudent() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }
    LinkedListStudent.prototype.insertFirstStudents = function (name, score) {
        var fistStudent = new Students_1.Students(name, score);
        fistStudent.next = this.head;
        this.head = fistStudent;
        if (!this.tail) {
            this.tail = fistStudent;
        }
        this.size++;
    };
    LinkedListStudent.prototype.insertLastStudents = function (name, score) {
        if (!this.head) {
            this.insertLastStudents(name, score);
        }
        else {
            var lastStudent = new Students_1.Students(name, score);
            this.tail.next = lastStudent;
            this.tail = lastStudent;
            this.size++;
        }
    };
    LinkedListStudent.prototype.readListStudent = function () {
        var listNameStudent = [];
        var currentStudent = this.head;
        while (currentStudent !== null) {
            listNameStudent.push(currentStudent);
            currentStudent = currentStudent.next;
        }
        return listNameStudent;
    };
    LinkedListStudent.prototype.totalStudentsFail = function () {
        var count = 0;
        var scoreStudent = this.head;
        for (var i = 0; i < this.readListStudent().length; i++) {
            if (scoreStudent.readScore() <= 5) {
                count++;
            }
            scoreStudent = scoreStudent.next;
        }
        return count;
    };
    LinkedListStudent.prototype.listStudentMaxScore = function () {
        var scoreStudent = this.head;
        var maxScore = this.readListStudent()[0].score;
        for (var i = 0; i < this.readListStudent().length; i++) {
            if (maxScore <= this.readListStudent()[i].score) {
                maxScore = this.readListStudent()[i].score;
            }
            scoreStudent = scoreStudent.next;
        }
        return scoreStudent;
    };
    return LinkedListStudent;
}());
exports.LinkedListStudent = LinkedListStudent;
