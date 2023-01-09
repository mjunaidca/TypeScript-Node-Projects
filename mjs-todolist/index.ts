#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";
import { addTask } from "./ToDoFunctions/addTask.js";
import { delTask } from "./ToDoFunctions/delTask.js";


// Motivational Welcome
// 1) View To Do Tasks
// 2) Add new tasks
// 3) Remove tasks from the list

let welcome = () => {console.log(chalk.green(`\nThe Hardest Part is starting out, rest is just Fun and Excitement\n`))};

let toDoList: string[] = ["Practice Coding", "Complete Freelance Projects", "Start Work", "Plan Next Month", "Take Coding Classes"];

export default async function toDoApp() {    

    welcome()
    
        let ToDo = await inquirer.prompt([{
            name: "app",
            type: "list",
            message: `What do you want to do\n`,
            choices: ["View Tasks", "Add New Task", "Remove Completed Task"]
        }]);

        switch (ToDo.app){
            case "View Tasks": {
                console.log(`\n`); 
                let allTasks = toDoList.flatMap((x)=> console.log(chalk.yellowBright(x)));     
                break;       
            };
            case "Add New Task": {
                console.log(`\n`); 
                await addTask(toDoList);
                break;            
            };
            case "Remove Completed Task": {
                console.log(`\n`); 
                await delTask(toDoList);
                break;            
            };
        }

    }

    async function doAgain(){
        do{
            await toDoApp() 
            var again = await inquirer
            .prompt({
                type: "confirm",
                name:"restart",
                message:"Wanna to do Something else??"
                })
                if(!again.restart){
                    console.log(`Quitting...Keep up the great work`);
                }
            }while(again.restart);
        }
    
        doAgain()
