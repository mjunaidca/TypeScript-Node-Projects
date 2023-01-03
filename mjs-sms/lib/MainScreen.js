import { studentsData, instructorsData } from "./DataBase.js";
import inquirer from "inquirer";
import chalk from 'chalk';
import { student_register, instructor_register } from "./Register.js";
import { student_login, instructors_login } from "./login.js";
export const welcome = async () => {
    let a = chalk.yellow("Welcome to the University Management System");
    console.log(`\n ${a} \n `);
};
export async function get_started() {
    const Start = await inquirer.prompt([
        {
            name: "start",
            type: "list",
            choices: ["Student", "Instructor"],
            message: chalk.green("Who are you?: \n")
        }
    ]);
    const getIn = await inquirer.prompt([
        {
            name: "Start",
            type: "list",
            choices: ["Login", "Register", "Exit"],
            message: chalk.green("\n Login to use LMS or Register now:")
        }
    ]);
    if (getIn.Start === "Register") {
        switch (Start.start) {
            case "Student": {
                const new_student = await student_register();
                console.log(`${new_student.name} Registered successfully`);
                console.log(chalk.green('\nLogging in...enter your Details\n'));
                studentsData.push(new_student);
                student_login();
                break;
            }
            case "Instructor": {
                const new_instructor = await instructor_register();
                console.log(`${new_instructor.name} Registered successfully`);
                console.log('\nLogging in...enter your Details\n');
                instructorsData.push(new_instructor);
                instructors_login();
                break;
            }
        }
    }
    else if (getIn.Start === "Login") {
        switch (Start.start) {
            case "Student": {
                student_login();
                break;
            }
            case "Instructor": {
                instructors_login();
                break;
            }
        }
    }
    else if (getIn.Start === "Exit") {
        switch (Start.start) {
            case "Student": {
                console.log(chalk.yellow("Logging out..."));
                break;
            }
            case "Instructor": {
                console.log(chalk.yellow("Logging out..."));
                break;
            }
        }
    }
}
