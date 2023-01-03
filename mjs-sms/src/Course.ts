import { Instructor } from "./Instructor.js";
import { Student } from "./Student.js";


export class Course{
    courseId: number = 0;
    static auto_id: number = 0;
    course_name: string;
    course_description: string;
    course_duration: string;
    course_credit_hours: string;
    course_students: Student[]=[];
    instructor: Instructor[]=[];
    
    constructor(course_name: string, course_description: string, course_duration: string, course_credit_hours: string)
    {
        this.course_name = course_name;
        this.course_description = course_description;
        this.course_duration = course_duration;
        this.course_credit_hours = course_credit_hours;
        this.courseId = ++Course.auto_id
    }

    addStudent(student: Student){
        this.course_students.push(student)
        student.enroll_In_New_Course(this)
    }

    setInstructor(instructor: Instructor){
        this.instructor.push(instructor);
        // instructor.assignCourse(this)
    }
}