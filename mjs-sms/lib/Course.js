export class Course {
    courseId = 0;
    static auto_id = 0;
    course_name;
    course_description;
    course_duration;
    course_credit_hours;
    course_students = [];
    instructor = [];
    constructor(course_name, course_description, course_duration, course_credit_hours) {
        this.course_name = course_name;
        this.course_description = course_description;
        this.course_duration = course_duration;
        this.course_credit_hours = course_credit_hours;
        this.courseId = ++Course.auto_id;
    }
    addStudent(student) {
        this.course_students.push(student);
        student.enroll_In_New_Course(this);
    }
    setInstructor(instructor) {
        this.instructor.push(instructor);
        // instructor.assignCourse(this)
    }
}
