#! /usr/bin/env node
// Goal: Make an interactive guess game
// Welcome
// Get input 
// Validate if its a num & value is b/w 1 & 10
// Total each user have 5 lives then Game Over
import inquirer from "inquirer";
import chalk from "chalk";
async function welcome() {
    const title = chalk.greenBright("Hey, Ready to test your luck :D");
    console.log(title + "\n");
    console.log(chalk.bgBlue(`You have ${playerLife - 1} lives to test your luck` + "\n"));
}
let playerLife = 5;
async function askQuestion() {
    do {
        var randomNumber = Math.floor(Math.random() * 10 + 1);
        var que = await inquirer
            .prompt([
            { type: "input",
                name: "user_num",
                message: chalk.bgCyan("?Select a number from 1-10:"),
                askAnswered: true,
                validate: (input) => {
                    if (isNaN(input) || input == "") {
                        let msg = chalk.red("Kindly, enter a num from 1 -10");
                        return msg;
                    }
                    if (input > 10 || input < 0) {
                        return "Kindly, enter a num from 1 -10";
                    }
                    return true;
                }
            }
        ]);
        playerLife--;
        console.log(`Your remaing lives are ${playerLife}`);
        if (que.user_num < randomNumber) {
            console.log(chalk.red(`Your num ${que.user_num} is less than the num Guess Num ${randomNumber}` + '\n'));
        }
        else if (que.user_num > randomNumber) {
            console.log(chalk.red(`Your num ${que.user_num} is greater than the num Guess Num ${randomNumber}` + '\n'));
        }
        else {
            return console.log(chalk.green(`Congats, right num` + '\n'));
        }
    } while ((playerLife > 0 && randomNumber !== que.user_num));
    if (playerLife == 0 && randomNumber !== que.user_num) {
        console.log(chalk.grey("Game Over" + '\n'));
    }
}
async function startAgain() {
    do {
        console.clear();
        await welcome();
        playerLife = 5;
        await askQuestion();
        var restart = await inquirer.prompt([
            {
                type: "input",
                name: "start_again",
                message: "Playing again? y/n ?",
            }
        ]);
    } while (restart.start_again === 'y' || restart.start_again === 'yes' || restart.start_again === 'Y' || restart.start_again === 'Yes');
}
welcome();
startAgain();
