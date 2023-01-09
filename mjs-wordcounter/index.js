#! /usr/bin/env node
// Enter english paragraph
// Return 1) characters without whitespaces 2) words without whitespaces
import inquirer from "inquirer";
import chalk from "chalk";
async function welcome() {
    const Title = chalk.bgBlue('Welcome to MJS word counter');
    console.log(Title);
}
async function Counter() {
    welcome();
    const Counter = await inquirer.prompt([{
            name: "str",
            message: "Enter your text:",
            type: "input"
        }]);
    let strArray = Counter.str.split(" ");
    console.log(chalk.yellow(`\nTotal Words In Parapgraph:${strArray.length}\n`));
    let noSpaceCount = Counter.str.split(" ").join("");
    console.log(chalk.yellow(`Total Characters Without Space:${noSpaceCount.length}\n`));
    console.log(chalk.yellow(`Total Characters With Space:${Counter.str.length}\n`));
}
async function startAgain() {
    do {
        await Counter();
        var Again = await inquirer.prompt([{
                type: "input",
                name: "play",
                message: chalk.rgb(187, 143, 206)('Got any other text to check! Yes or No')
            }]);
    } while (Again.play === "Yes" || Again.play === "Y" || Again.play === "yes" || Again.play === "y");
}
startAgain();
