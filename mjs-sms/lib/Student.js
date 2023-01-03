import { Person } from "./Person.js";
export class Student extends Person {
    studentEmail;
    studentPassword;
    coursesEnrolled = [];
    studentId = 10000;
    course = [];
    static auto_id = 10000;
    constructor(studentEmail, studentPassword, personName, personAge, personGender) {
        super(personName, personAge, personGender);
        this.studentEmail = studentEmail;
        this.studentPassword = studentPassword;
        this.studentId = ++Student.auto_id;
    }
    enroll_In_New_Course(course) {
        this.coursesEnrolled.push(course);
        // course.addStudent(this)
    }
}
