import inquirer from "inquirer";
import chalk from "chalk";

async function transfer(balance: number){
    const answer = await inquirer.prompt([{
        name: "accountNumber",
        type: "number",
        message: "Enter account number"
    },
    {
        name: "amount",
        type: "number",
        message: "Enter your transfer amount"
    }

]);

if (balance > answer.amount){
    balance -=answer.amount
    console.log(`Amount ${answer.amount} PKR transferred successfully`);

} else {
    console.log(chalk.red("Insufficient balance"));
    
}

return balance

}

export default transfer