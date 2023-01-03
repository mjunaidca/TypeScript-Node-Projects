import { Course } from "./Course.js";
import { Instructor } from "./Instructor.js";
import { Student } from "./Student.js";
const student1 = new Student("mas@ums", "mas", "Muhammad Ahmad", 22, "male");
const student2 = new Student("mjs", "js", "Muhammad Junaid", 21, "male");
const instructor1 = new Instructor("Sir Zia", 59, "male", "zia", "zia");
const instructor2 = new Instructor("Sir Ali", 29, "male", "ali@piac", "ali123");
const course1 = new Course("Metaverse", "Piac", "12 months", "30");
const course2 = new Course("Web 3.0", "Piac", "12 months", "30");
const course3 = new Course("BlockChain", "Piac", "12 months", "30");
const course4 = new Course("Data Science", "Piac", "12 months", "30");
const course5 = new Course("Cyber Security", "Piac", "12 months", "30");
instructor1.assignCourse(course1);
// instructor1.assignCourse(course2)
instructor2.assignCourse(course2);
course1.addStudent(student1);
course1.addStudent(student2);
course2.addStudent(student1);
course2.addStudent(student2);
course3.addStudent(student2);
course4.addStudent(student2);
export let studentsData = [student1, student2];
export let courseData = [course1, course2, course3, course4, course5];
export let instructorsData = [instructor1, instructor2];
// let c = instructor1.courses.find((x) => x.course_name);
// let d = c?.course_name
// console.log(d);
// console.log(courseData[0].course_students.map((x)=>x.name));
// console.log(instructorsData[0].courses[1].course_name);
// console.log(instructorsData[0].courses[0].course_name);
// student1.enroll_In_New_Course(course1)mas
// course1.addStudent(student1)
// course1.setInstructor(instructor1)
// console.log(course1.course_students);
// console.log(student1.coursesEnrolled);
// console.log(course1.instructor);
// console.log(student1);
// console.log(course1.course_students);
// console.log(student1.coursesEnrolled);
// console.log(course1.addStudent(student1));
