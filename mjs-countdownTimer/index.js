#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
let repeat = false;
async function welcome() {
    console.log(chalk.green('\n\tGet ready to Count Leftover Time for your Upcoming Event!!\n'));
}
async function dateCounDown() {
    welcome();
    do {
        let currentDate = new Date().getDate();
        let currentMonth = new Date().getMonth();
        let userData = await inquirer.prompt([
            {
                name: "Date",
                message: "Enter the Date [1-31] for which you want to start Count Down",
                type: "input",
                validate: function (input) {
                    if (isNaN(input) || input < 0 || input > 32 || input === "") {
                        return "Not a valid Date";
                    }
                    else {
                        return true;
                    }
                }
            },
            {
                name: "Month",
                message: "Enter the Month [1-12] to start Count Down",
                type: "input",
                validate: function (input) {
                    if (isNaN(input) || input < 0 || input > 12 || input === "") {
                        return "Not a valid Month";
                    }
                    else {
                        return true;
                    }
                }
            }
        ]);
        let userDate = Number((userData.Date));
        let userMonth = Number((userData.Month));
        let strUserMonth = months[userMonth];
        let strCurrentMonth = months[currentMonth];
        console.log(chalk.yellow(`\nYour Event Date: ${userDate} ${strUserMonth} \n`));
        console.log(chalk.yellow(`Today Is: ${currentDate} ${strCurrentMonth}\n`));
        // to get Minutes comparision
        let userMinutes = (userDate * 24 * 60) + (userMonth * 30 * 24 * 60);
        let currentMinutes = (currentDate * 60 * 24) + ((currentMonth + 1) * 30 * 60 * 24);
        console.log(chalk.bgBlue(`\t==> Minutes Left: ${userMinutes - currentMinutes}\n`));
        // to get Hours comparision
        let userHours = (userDate * 24) + (userMonth * 30 * 24);
        let currentHours = (currentDate * 24) + ((currentMonth + 1) * 30 * 24);
        console.log(chalk.bgBlue(`\t==> Hours Left: ${userHours - currentHours}\n`));
        // to get days comparision
        let userDays = (userDate) + (userMonth * 30);
        let currentDays = (currentDate) + ((currentMonth + 1) * 30);
        console.log(chalk.bgBlue(`\t==> Days Left: ${userDays - currentDays}\n`));
        repeat = await Repeat();
    } while (repeat === true);
}
async function Repeat() {
    let again = await inquirer.prompt([{
            name: "Again",
            type: "list",
            choices: ['y', 'n'],
            message: "Use CountDown Timer Again!"
        }]);
    return again.Again === 'y' ? true : false;
}
dateCounDown();
