import inquirer from "inquirer";
import chalk from "chalk";


async function OtherAmount(balance: number){
    const OtherAmt = await inquirer.prompt([{
        name:"otherAmount",
        type: "number",
        message: "please enter your amount"
    }]);

    if (OtherAmt.otherAmount < balance){

        balance -=OtherAmt.otherAmount;

    }
    else {
        console.log(chalk.red("Insufficient balance"));
        balance = await OtherAmount(balance);
    }
    return balance
}

async function cashWithdraw(balance: number){
    const answer = await inquirer.prompt([{
        name: "amount",
        type: "list",
        choices: ["500", "1000", "2000", "5000", "10000", "Other Amount"],
        message: "Please select your amount"
    }]);

  

    switch (answer.amount){
        case "500":{
                if (balance > Number(answer.amount)){
                balance -=500;
                console.log(chalk.yellow(`\nYour new balance is: ${balance}`));
            }
            else {
                console.log(chalk.red("You have insufficient balance"));
            }
        break;}
        case "1000":{
            if (balance > Number(answer.amount)){
                balance -=1000;
                console.log(chalk.yellow(`\nYour new balance is: ${balance}`));
            }
            else {
                console.log(chalk.red("You have insufficient balance"));
            }
            break;}
        case "2000":{
            if (balance > Number(answer.amount)){
                balance -=2000;
                console.log(chalk.yellow(`\nYour new balance is: ${balance}`));
            }
            else {
                console.log(chalk.red("You have insufficient balance"));
            }
            break;}
        case "5000":{
            if (balance > Number(answer.amount)){
                balance -=5000;
                console.log(chalk.yellow(`\nYour new balance is: ${balance}`));
            }
            else {
                console.log(chalk.red("You have insufficient balance"));
                 
            }
            break;}
        case "10000":{
            if (balance > Number(answer.amount)){
                balance -=1000;
                console.log(chalk.yellow(`\nYour new balance is: ${balance}`));
            }
            else {
                console.log(chalk.red("You have insufficient balance"));
                       
            }
            break;}
        case "Other Amount":{
            balance = await OtherAmount(balance);
            console.log(chalk.yellow(`\nYour new balance is: ${balance}`));
            break;   
    }}

    return balance;

}


export default cashWithdraw