#! /usr.bigint.env node

import inquirer from "inquirer";

(
   async () => {
    const usersInput: {usedId: string, userPin: string}= await inquirer.prompt([
        {
            name: "userId",
            message: "Enter your user Id",
            type: "input"
        },
        {
            name: "userPin",
            message: "Enter your Pin Number",
            type: "password"
        }
    ])
    // console.log("User Id", usersInput.usedId)
    // console.log(usersInput)    

    const userData = {
        userId: usersInput.usedId,
        userPin: usersInput.userPin,
        amount: Math.floor(Math.random() * 1000000+1)
    }

    // console.log(userData);
    const selectedOpt: {options: "cash withdrawl" | "exit"} = await inquirer.prompt([
        {
            name: "options",
            message: "Select Any Option",
            type: "list",
            choices: ["cash withdrawl" ,"exit"]
        },
    ])
    // console.log(selectedOpt);
    
    if(selectedOpt.options === "cash withdrawl"){
        console.log(`Your current balance: ${userData.amount}`);
        
        const enteredAmount:{amount:number} = await inquirer.prompt([
            {
                message: "Enter your amount",
                name: "amount",
                type:"numner",
                validate: (input)=>{
                    if (input > userData.amount){
                        return "Insufficient Balance"
                    } else{
                    return true
                    }

                }
            }
        ])

        userData.amount -=enteredAmount.amount
        console.log(`Your balance after withdrawl: ${userData.amount}`)     

    }
   }
)()