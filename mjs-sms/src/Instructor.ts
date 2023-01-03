import { Person } from "./Person.js";
import { Course } from "./Course.js";

export class Instructor extends Person{
    instructorEmail: string;
    instructorPassword: string;
    instructorId: number = 0;
    static auto_id: number = 0;
    #salary?: number;
    courses: Course[]=[];
    
    constructor(personName: string, personAge: number, personGender: string, instructorEmail: string, instructorPassword: string)
    {
        super(personName, personAge, personGender)
        this.instructorEmail = instructorEmail;
        this.instructorPassword = instructorPassword;
        this.instructorId = ++Instructor.auto_id;
    }

    assignCourse(course: Course){
        this.courses.push(course)        
    }
}