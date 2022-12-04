#! /usr/bin/env node

import inquirer from 'inquirer';
import chalk from 'chalk';
import chalkAnimation from 'chalk-animation';

// Greet The User
// Get first Number, Operator, Last Number
// Calculate the result
// More calculations? or Done

function greet(msg: string):void {
    console.log(chalk.blueBright(msg));
    console.log(`_____________________
    |  _________________  |
    | | JO           0. | |
    | |_________________| |
    |  ___ ___ ___   ___  |
    | | 7 | 8 | 9 | | + | |
    | |___|___|___| |___| |
    | | 4 | 5 | 6 | | - | |
    | |___|___|___| |___| |
    | | 1 | 2 | 3 | | x | |
    | |___|___|___| |___| |
    | | . | 0 | = | | / | |
    | |___|___|___| |___| |
    |_____________________|
`);
    
}

let again = false;

type Answer = {
    firstNum: string;
    operator: "+"| "-"| "*"| "/"| "%"|"^";
    lastNum: string;
}


async function askQuestions() {
    const ans: Answer = await inquirer.prompt([
        {
            name: "firstNum",
            message: "Enter the first number: ",
            type: "input",
            validate: function(input){
                if (isNaN(input) || input === ""){
                    return "Not a valid input"
                }
                else {
                    return true;
                }
            }
        },
        {
            type: "list",
            name: "operator",
            message: "Select the operator: ",
            choices: ["+", "-", "*", "/", "^", "%"]
        },
        {
            name: "lastNum",
            message: "Enter the last number: ",
            type: "input",
            validate: function(input){
                if (isNaN(input) || input === ""){
                    return "Not a valid input"
                }
                else {
                    return true;
                }
            }
        }
    ])

let firstNum = Number(ans.firstNum);
let lastNum = Number(ans.lastNum);

    switch (ans.operator) {
        case "+":
            console.log(`${firstNum + lastNum}`);            
            break;
        case "-":
                console.log(`${firstNum - lastNum}`);            
                break;
        case "*":
            console.log(`${firstNum * lastNum}`);            
            break;
        case "/":
            console.log(`${firstNum / lastNum}`);            
            break;
        case "%":
            console.log(`${firstNum % lastNum}`);            
            break;
        case "^":
            console.log(`${firstNum ^ lastNum}`);            
            break;
        default:
            break;
    }

}    

greet("Ready to make some calculations?");

async function doMore(){
    do{
        await askQuestions();
        var again = await inquirer
        .prompt({
            type:"input",
            name:"restart",
            message:"Do you want to start again? (y/n)"
            })
        }while(again.restart == "y" || again.restart == "Y" || again.restart == "yes" || again.restart == "Yes");
    }

    doMore();