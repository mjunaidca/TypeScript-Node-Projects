import inquirer from "inquirer";
import chalk from "chalk";
const Electric = Math.ceil(Math.random() * 1000 + 1);
const Gas = Math.ceil(Math.random() * 1000 + 1);
const Phone = Math.ceil(Math.random() * 1000 + 1);
async function payBill(balance) {
    const input = await inquirer.prompt([{
            name: "BillType",
            type: "list",
            choices: ["Electricity", "Gas", "Phone"],
            message: "Slect your bill type"
        }]);
    if (input.BillType == "Electricity") {
        console.log(chalk.yellow(`\nYour bill amount: ${Electric} is Paid Successfully`));
        balance -= Electric;
    }
    else if (input.BillType == "Gas") {
        console.log(chalk.yellow(`\nYour bill amount: ${Gas} is Paid Successfully`));
        balance -= Gas;
    }
    else if (input.BillType == "Phone") {
        console.log(chalk.yellow(`\nYour bill amount: ${Phone} is Paid Successfully`));
        balance -= Phone;
    }
    return balance;
}
export default payBill;
