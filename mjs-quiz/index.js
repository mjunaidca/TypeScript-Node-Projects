#! usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from 'chalk-animation';
const sleep = (ms = 3000) => new Promise((r) => setTimeout(r, 2000));
async function welcome() {
    const message = chalkAnimation.neon('Ready to Become Typescript Wizard!!');
    await sleep();
    message.stop();
    console.log(`
    ${chalk.bgBlue("THE WIZARD PLAYGROUND!")}
    ${chalk.cyan(`This is your way to become a TypeScript Wized.
    Answer each question carefully...and pass through the Wizards Land!`)}   
    `);
    await sleep();
}
let userCorrectAnswerss = [];
let wrongAnswers = [];
let repeat = true;
async function quizGame() {
    await welcome();
    async function Q1() {
        let q = await inquirer.prompt([
            {
                name: "Q",
                message: chalk.yellow("\nW1 => TypeScript allows developers to add ____ to JavaScript.\n"),
                type: "list",
                choices: ["\ttypes", "\tMarkup", "\tStyling", "\tComments"],
            }
        ]);
        if (q.Q == "\ttypes") {
            console.log(chalk.green("Wow Correct!! :D"));
            userCorrectAnswerss.push(q.Q);
        }
        else {
            wrongAnswers.push(q.Q);
        }
    }
    async function Q2() {
        let q = await inquirer.prompt([
            {
                name: "Q2",
                message: chalk.yellow(`\nW2 => What will you use to create an empty "myVar", and disable type checking:\n`),
                type: "list",
                choices: ["\tany", "\tstatic", "\tignore", "\tallow"]
            }
        ]);
        if (q.Q2 == "\tany") {
            console.log(chalk.green("Wow Correct!! :D"));
            userCorrectAnswerss.push(q.Q2);
        }
        else {
            wrongAnswers.push(q.Q2);
        }
    }
    async function Q3() {
        let q = await inquirer.prompt([
            {
                name: "Q3",
                message: chalk.yellow(`\nW3 => This is a function that returns _____ defined type? \n\n\tfunction myFunc(): string \n\t\t{return "Fun to learn"}\n`),
                type: "list",
                choices: ["\texplicitly", "\timplicitly ", "\ttypechecking", "\ttyped"]
            }
        ]);
        if (q.Q3 == "\texplicitly") {
            console.log(chalk.green("Wow Correct!! :D"));
            userCorrectAnswerss.push(q.Q3);
        }
        else {
            wrongAnswers.push(q.Q3);
        }
    }
    async function Q4() {
        let q = await inquirer.prompt([
            {
                name: "Q4",
                message: chalk.yellow(`\nW4 => Select correct Type Alias for a string call animalType:\n`),
                type: "list",
                choices: [`\ttype carType = string`, `\tinterface carType = string`, `\tproperty carType = string`, `\tclass carType = string`]
            }
        ]);
        if (q.Q4 == `\ttype carType = string`) {
            console.log(chalk.green("Wow Correct!! :D"));
            userCorrectAnswerss.push(q.Q4);
        }
        else {
            wrongAnswers.push(q.Q4);
        }
    }
    do {
        await Q1();
        await Q2();
        await Q3();
        await Q4();
        console.log(chalk.bgBlue(`\n===============TS Wizards Playbook Results===============`));
        console.log(`\n ==> You Correctly Answersed: ${chalk.green(userCorrectAnswerss.length)} Wizards`);
        console.log(`\n ==> Try Again For ${chalk.red(wrongAnswers.length)} Wrong Wizards\n`);
        repeat = await Repeat();
    } while (repeat === true);
}
async function Repeat() {
    let again = await inquirer.prompt([{
            name: "Again",
            type: "list",
            choices: ['y', 'n'],
            message: "Try TypeScript Wizards Playbook Again!"
        }]);
    return again.Again === 'y' ? true : false;
}
quizGame();
