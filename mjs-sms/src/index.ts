#! /usr/bin/env node

import { get_started, welcome } from "./MainScreen.js";
import { studentsData, instructorsData } from "./DataBase.js";
import chalk from "chalk";

let ins = `Email: ${instructorsData[0].instructorEmail}\nPassword: ${instructorsData[0].instructorPassword}`;
let stu = `Email: ${studentsData[0].studentEmail}\nPassword: ${studentsData[0].studentPassword}`;


console.log(chalk.white(`\nInstructor Login: \n${ins}\n`));

console.log(chalk.white(`Student Login: \n${stu}\n`));

welcome()

get_started()
