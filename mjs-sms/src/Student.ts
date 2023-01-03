import { Person } from "./Person.js";
import { Course } from "./Course.js";
import { courseData } from "./DataBase.js";

export class Student extends Person {
    studentEmail: string;
    studentPassword: string;
    coursesEnrolled: Course[] = [];
    studentId: number = 10000;
    course: Course[]=[];
    static auto_id: number = 10000;
    
    constructor(studentEmail: string, studentPassword: string, personName: string, personAge: number, personGender: string)
    {
        super(personName, personAge, personGender)
        this.studentEmail = studentEmail;
        this.studentPassword = studentPassword;
        this.studentId = ++ Student.auto_id;
    }

    enroll_In_New_Course(course: Course){
        this.coursesEnrolled.push(course)
        // course.addStudent(this)
    }

}