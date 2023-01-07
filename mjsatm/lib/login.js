import inquirer from "inquirer";
import users from "./users.js";
import { operate } from "./operations.js";
const welcome = async () => {
    console.log("Welcome to the FinTech ATM");
};
export const login = async () => {
    welcome();
    const log = await inquirer.prompt([
        {
            name: "id",
            message: "Enter your userID",
            type: "input"
        },
        {
            name: "pin",
            message: "Enter your secrent Pin",
            type: "number"
        }
    ]);
    let loginUser = users.find((x) => log.id === users[0].userId && log.pin === users[0].pinCode);
    if (!loginUser) {
        console.log('Invalid Pin or UserID');
    }
    if (loginUser) {
        console.log(`Login Successfully! Welcome ${loginUser.name}`);
        operate(loginUser.name, loginUser.userId, loginUser.pinCode, loginUser.balance);
    }
    return loginUser;
};
