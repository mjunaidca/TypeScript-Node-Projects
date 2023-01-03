import { Person } from "./Person.js";
export class Instructor extends Person {
    instructorEmail;
    instructorPassword;
    instructorId = 0;
    static auto_id = 0;
    #salary;
    courses = [];
    constructor(personName, personAge, personGender, instructorEmail, instructorPassword) {
        super(personName, personAge, personGender);
        this.instructorEmail = instructorEmail;
        this.instructorPassword = instructorPassword;
        this.instructorId = ++Instructor.auto_id;
    }
    assignCourse(course) {
        this.courses.push(course);
    }
}
