import { studentsData, courseData, instructorsData } from "./DataBase.js";
import inquirer from "inquirer";
import { doMore } from "./calculator.js";
import { get_started } from "./MainScreen.js";
import chalk from "chalk";
import { exams } from "./exams.js";
import { announcements } from "./Announcements.js";
export async function student_login() {
    let user = await inquirer.prompt([
        {
            name: "_email",
            message: "Enter your eMail Address:",
            type: "input"
        },
        {
            name: "_password",
            message: "Enter your Password:",
            type: "password"
        }
    ]);
    let stu = studentsData.find((x) => x.studentEmail === user._email && x.studentPassword === user._password); // to access current student in dataBase
    if (stu) {
        console.log(chalk.green(`\nLogin successful welcome ${stu?.name}`));
        user_dashboard();
    }
    else if (!stu) {
        console.log(chalk.red("\nInvalid logn \n"));
        let login_again = await inquirer.prompt([{
                name: "Again",
                message: "Try again or register now:",
                type: "list",
                choices: ["Login Again", "Go To Main Dashboard", "Quit"]
            }]);
        switch (login_again.Again) {
            case ("Login Again"): {
                await student_login.call(stu);
                break;
            }
            case ("Go To Main Dashboard"): {
                await get_started.call(stu);
                break;
            }
            case ("Exit"): {
                await console.log(chalk.yellow("Quitting...Now"));
                break;
            }
        }
    }
    async function user_dashboard() {
        let dashboard = await inquirer.prompt([{
                name: "operations",
                message: "\n What do you want to do? \n",
                type: "list",
                choices: ["Profile", "Enrolled Courses", "Register New Course", "Exams", "Tools", "Announcments", "Log Out"]
            }]);
        switch (dashboard.operations) {
            case "Profile": {
                console.log(chalk.yellow(` Id: ${stu?.studentId}\n Name: ${stu?.name}\n Email: ${stu?.studentEmail}\n Gender: ${stu?.gender}\n Age: ${stu?.age} `));
                console.log((chalk.yellow(` Courses Enrolled: ${stu?.coursesEnrolled.flatMap((x) => x.course_name).join(", ")}`)));
                break;
            }
            case "Enrolled Courses": {
                let e_c = stu?.coursesEnrolled;
                console.log(e_c);
                break;
            }
            case "Register New Course": {
                let courses = await inquirer.prompt([{
                        name: "Courses",
                        message: "Select the courses to enroll",
                        type: "list",
                        choices: courseData.flatMap((x) => x.course_name)
                    }]);
                let d = courseData.find((x) => x.course_name === courses.Courses); // to access current course in dataBase
                let a = courseData.map((i) => i.course_name); // returns string
                for (let i = 0; i < a.length; i++) {
                    if (courses.Courses === a[i]) {
                        let ac = courses.Courses;
                        stu?.enroll_In_New_Course(ac);
                    }
                }
                break;
            }
            case "Exams": {
                console.log(chalk.blue(`\n ${stu?.name}, you will be tested soon`));
                await exams();
                break;
            }
            case "Tools": {
                do {
                    let tools = await inquirer.prompt([{
                            name: "toolset",
                            message: "Here are your tools",
                            type: "list",
                            choices: ["Calculator", "Back"]
                        }]);
                    var back = tools.toolset;
                    switch (tools.toolset) {
                        case "Calculator": {
                            await doMore();
                            await tools.toolset;
                            break;
                        }
                        case "Back": {
                            back = "Back";
                            break;
                        }
                    }
                } while (back !== "Back");
                break;
            }
            case "Announcments": {
                console.log(chalk.blue("No Announcements"));
                await announcements();
                break;
            }
            case "Log Out": {
                // stu_dash = "Exit";
                // console.log(studentsData);
                console.log(chalk.yellow(`\n Quitting...`));
                break;
            }
        }
        dashboard.operations !== "Log Out" ? await user_dashboard() : console.log(`\n Keep learning ${stu?.name}`);
    }
}
export async function instructors_login() {
    let user = await inquirer.prompt([
        {
            name: "_email",
            message: "Enter your eMail Address:",
            type: "input"
        },
        {
            name: "_password",
            message: "Enter your Password:",
            type: "password"
        }
    ]);
    let ins = instructorsData.find((x) => x.instructorEmail === user._email && x.instructorPassword === user._password); // to access current instructors in dataBase
    if (ins) {
        console.log(chalk.green(`\nLogin successful welcome ${ins?.name}`));
        user_dashboard();
    }
    else if (!ins) {
        console.log(chalk.red("\nInvalid logn \n"));
        let login_again = await inquirer.prompt([{
                name: "Again",
                message: "Login again or register now:",
                type: "list",
                choices: ["Login Again", "Go To Main Dashboard", "Quit"]
            }]);
        switch (login_again.Again) {
            case ("Login Again"): {
                await instructors_login.call(ins);
                break;
            }
            case ("Go To Main Dashboard"): {
                await get_started.call(ins);
                break;
            }
            case ("Exit"): {
                await console.log(chalk.yellow("Exiting...Now"));
                break;
            }
        }
    }
    async function user_dashboard() {
        let dashboard = await inquirer.prompt([{
                name: "operations",
                message: "\n What do you want to do? \n",
                type: "list",
                choices: ["Profile", "Assigned Courses", "Enrolled Students", "Apply To Teach Other Courses Offered", "Use Tools", "Announcments", "Log Out"]
            }]);
        let aa = ins?.courses.map((x) => x.course_name).join(' \n '); // get array of instructor coursenames
        switch (dashboard.operations) {
            case "Profile": {
                console.log(chalk.green(`Name: ${ins?.name}\nAge: ${ins?.age}\nGender: ${ins?.gender}\nRegistered Email: ${ins?.instructorEmail}\nId: ${ins?.instructorId}`));
                console.log(chalk.green(`Courses Teaching: ${ins?.courses.flatMap((x) => x.course_name).join(', ')}`));
                break;
            }
            case "Assigned Courses": {
                // let c = ins?.courses //.find((x) => x.course_name);
                // let d = c?.course_name
                console.log(ins?.courses);
                break;
            }
            case "Enrolled Students": {
                let a_c = ins?.courses.flatMap((x) => x.course_name);
                let ins_c = await inquirer.prompt([{
                        name: "enr_course",
                        message: "Select the Courses to view students",
                        type: "list",
                        choices: a_c
                    }]);
                if (a_c)
                    for (let i = 0; i < a_c?.length; i++) {
                        let c = ins?.courses[i];
                        console.log(` Students Enrolled:\n ${(c?.course_students.map((x) => x.name).join(" \n "))}`);
                    }
                break;
            }
            case "Apply To Teach Other Courses Offered": {
                let courses = await inquirer.prompt([{
                        name: "All_Courses",
                        message: "Apply to start teaching new courses:",
                        type: "list",
                        choices: courseData.flatMap((x) => x.course_name)
                    }]);
                let d = courseData.find((x) => x.course_name === courses.All_Courses); // to access current course in dataBase
                let a = courseData.map((i) => i.course_name); // returns name of all courses in object || get string for any course with [num]
                for (let i = 0; i < a.length; i++) {
                    if (courses.Courses === a[i]) {
                        let ic = courses.All_Courses;
                        ins?.assignCourse(ic);
                    }
                }
                break;
            }
            case "Use Tools": {
                do {
                    let tools = await inquirer.prompt([{
                            name: "toolset",
                            message: "Here are your tools",
                            type: "list",
                            choices: ["Calculator", "Back"]
                        }]);
                    var back = tools.toolset;
                    switch (tools.toolset) {
                        case "Calculator": {
                            await doMore();
                            await tools.toolset;
                            break;
                        }
                        case "Back": {
                            back = "Back";
                            break;
                        }
                    }
                } while (back !== "Back");
                break;
            }
            case "Announcments": {
                console.log(chalk.blue("No Announcements"));
                await announcements();
                break;
            }
            case "Log Out": {
                console.log(chalk.yellow(`\n Quitting...`));
                break;
            }
        }
        dashboard.operations !== "Log Out" ? await user_dashboard() : console.log(`\n Let's give real education to our Younger Generation ${ins?.name}`);
    }
}
