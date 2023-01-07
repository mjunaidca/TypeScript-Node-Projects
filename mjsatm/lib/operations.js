import inquirer from "inquirer";
import cashWithdraw from "./Withdrawl.js";
import transfer from "./Transfer.js";
import payBill from "./Bills.js";
import chalk from "chalk";
async function anotherTransaction() {
    const OTrans = await inquirer.prompt([{
            name: "otherTrans",
            type: "list",
            choices: ["Yes", "No"],
            message: "Do you want another Tranasction?"
        }]);
    return OTrans.otherTrans;
}
export const operate = async function atm(name, id, pin, balance) {
    do {
        const op = await inquirer.prompt([{
                name: 'operate',
                type: "list",
                message: "What do you want to do?",
                choices: ['Check Balance', 'Cash Withdrawl', 'Cash Transfer', 'Bill Payment', 'Exit']
            }]);
        switch (op.operate) {
            case 'Check Balance':
                {
                    console.log(chalk.yellow(`\n${name} your Account Balance is ${balance}\n`));
                    break;
                }
                ;
            case 'Cash Withdrawl':
                {
                    balance = await cashWithdraw(balance);
                    break;
                }
                ;
            case 'Cash Transfer':
                {
                    balance = await transfer(balance);
                    break;
                }
                ;
            case 'Bill Payment':
                {
                    balance = await payBill(balance);
                    break;
                }
                ;
            case 'Exit':
                {
                    anothertran = "No";
                    break;
                }
                ;
        }
        if (op.operate !== "Exit" && op.operate !== "Check Balance") {
            console.log(chalk.green(`\nSuccessful transaction, new balance is ${balance}\n`));
            var anothertran = await anotherTransaction();
        }
        if (anothertran == "No") {
            console.log("\nThank you for using Fin Tech ATM services\n");
        }
    } while (anothertran !== "No");
};
