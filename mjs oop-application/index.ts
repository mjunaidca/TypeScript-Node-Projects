#! usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

export class Person {
    protected personality: string ="Mystery";

    async AskQuestion(){
        const question = await inquirer.prompt([{
            name: "que",
            type: "number",
            message: "Type 0 if you like to talk with others and if you don't like to talk with others Type 1."
        }])
        if (question.que === 0) {
            this.personality = "extrovert"
        } else if (question.que === 1) {
            this.personality = "introvert"
        } 
    }

    getPersonality(){
        return this.personality
    }

}

class Student extends Person {
    private _name: string = "";

    get accessName() {
        return this._name;
    }
    set accessName(_name) {
        this._name = _name;
    }
}

    // initializing a student

let input = new Student; 

    //Getting name of student with Setters

    let studentName = await inquirer.prompt([{
        name: "name",
        type: "input",
        message: "Hey student, what's your name?"
    }]) 

console.log(chalk.bgBlue(`\n\tLet's find your personality!\n`));

let repeat = false;

async function findPersonality() {
    do {
        // Using person methods to find personality of student

        await input.AskQuestion();

        const sleep = (ms = 3000) => new Promise((r)=> setTimeout(r, 2000))

        console.clear();

        console.log(chalk.yellow("\t\nAlogoritham is finding your personality\n"));
        await sleep();

        console.log(chalk.bgBlue.underline(`\t Your personality is ${input.getPersonality()}\n`));

        repeat = await Repeat()

    } while (repeat === true)
}

async function Repeat (){
    let again = await inquirer.prompt([{
        name: "repeat",
        type: "confirm",
        message: "Do you want to do another personality test"
    }]);

    return again.repeat === true? true: false
}

findPersonality()
    


    



   









