import inquirer from "inquirer";
import chalk from "chalk";

export async function delTask(toDolist) {
    let delTask = await inquirer.prompt([
        {
            name: "toDelTask",
            type: "list",
            message: `\nWhich Task Have You Completed?\n`,
            choices: toDolist.map((x) => { return x; })
        },
        {
            name: "confirm",
            type: "confirm",
            message: "Confirm you want to delete it!"
        }
    ]);
    if (delTask.confirm) {
        let index = toDolist.indexOf(delTask.toDelTask);
        toDolist = toDolist.splice(delTask.toDelTask, index);
        console.log(chalk.yellow(`\nCongrats on Successfully Competeing "${delTask.toDelTask}" Task\n`));
    }
}
