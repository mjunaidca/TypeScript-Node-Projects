import { Student } from "./Student.js";
import { Instructor } from "./Instructor.js";
import inquirer from "inquirer";

export async function student_register(){

    let register_form = await inquirer.prompt([
        {
            name: "_email",
            message: "Enter your eMail Address:",
            type: "input",
            validate: function(input){
                if (!isNaN(input) || input === ""){
                    return "Not a valid email address"
                }
                else {
                    return true;
                }
            }
        },
        {
            name: "_password",
            message: "Create new Password:",
            type: "password",
            validate: function(input){
                if (!isNaN(input) || input === ""){
                    return "Make a secure password"
                }
                else {
                    return true;
                }
            }
        },
    
        {
            name: "_name",
            message: "Enter your Name:",
            type: "input"
        },
        {
            name: "_age",
            message: "Enter your Age:",
            type: "input"
            
        },
        {
            name: "_gender",
            message: "Select Your Gender:",
            type: "list",
            choices: ["Male", "Female"]
        }   
    ]); 

    let new_student = new Student(
        register_form._email,
        register_form._password,
        register_form._name,
        register_form._age,
        register_form._gender
    )

    return new_student
}

export async function instructor_register(){

    let register_form = await inquirer.prompt([
        {
            name: "_email",
            message: "Enter your eMail Address:",
            type: "input",
            validate: function(input){
                if (!isNaN(input) || input === ""){
                    return "Not a valid email address"
                }
                else {
                    return true;
                }
            }
        },
        {
            name: "_password",
            message: "Create new Password:",
            type: "password",
            validate: function(input){
                if (!isNaN(input) || input === ""){
                    return "Make a secure password"
                }
                else {
                    return true;
                }
            }
        },
    
        {
            name: "_name",
            message: "Enter your Name:",
            type: "input"
        },
        {
            name: "_age",
            message: "Enter your Age:",
            type: "input"
            
        },
        {
            name: "_gender",
            message: "Select Your Gender:",
            type: "list",
            choices: ["Male", "Female"]
        }   
    ]); 

    let new_instructor = new Instructor(
        register_form._email,
        register_form._password,
        register_form._name,
        register_form._age,
        register_form._gender
    )

    return new_instructor
}