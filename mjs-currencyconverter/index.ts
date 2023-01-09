#! /usr/bin/env node

import inquirer from "inquirer";
import liveNewCurrentRates from "./CurrencyApiData/ConversionData.js";
// It return an array of arrays
// Each array is getting live symbol + Currency value
// The base currency is EUR

let repeat = true;

let EURTOUSD: number;
let EURTOPKR: number;
let USDTOEUR: number; 
let PKRTOEUR: number; 

let USDTOPKR = 228.12;
let PKRTOUSD = 0.0044;


for (let i=0; i<liveNewCurrentRates.length; i++){

        if (liveNewCurrentRates[i][0] === 'PKR'){
            EURTOPKR = Number(liveNewCurrentRates[i][1]);  
        } 
        if (liveNewCurrentRates[i][0] === 'USD'){
            EURTOUSD = Number(liveNewCurrentRates[i][1]);   
        } 
        if (liveNewCurrentRates[i][0] === 'USD'){
            USDTOEUR = 1/Number(liveNewCurrentRates[i][1]);   
        } 
        if (liveNewCurrentRates[i][0] === 'PKR'){
            PKRTOEUR = 1/Number(liveNewCurrentRates[i][1]);   
        } 
    }


async function welcome() {

    console.log("\nWelcome to MJS Currency Converter\n");
    
    
}


async function converter(){

    welcome()

    do {

    let answer: {CurrencyFrom: string, CurrencyTo: string, Amount: number} = 
    
    await inquirer.prompt([
        {
            name: "CurrencyFrom",
            type: "list",
            choices: ['USD', 'PKR', 'EUR'],
            message: "Which currency do you want to Convert:"
        },
        {
            name: "CurrencyTo",
            type: "list",
            choices: ['USD', 'PKR', 'EUR'],
            message: "In which currency do you want to Convert:"
        },
        {
            name: "Amount",
            type: "number",
            message: "Enter Value:"
        }]);

        switch (answer.CurrencyFrom){
            case 'USD':
                if (answer.CurrencyTo === "PKR"){
                    let ans = await USDTOPKR
                    console.log(answer.Amount * ans);     
                
                } else if (answer.CurrencyTo === "EUR"){
                    console.log(answer.Amount * USDTOEUR);

                } else {
                    console.log(answer.Amount);

                }
                break;
            case 'PKR':
                if (answer.CurrencyTo === "USD"){
                    console.log(answer.Amount * PKRTOUSD);

                    

                } else if (answer.CurrencyTo === "EUR"){
                    console.log(answer.Amount * PKRTOEUR);

                } else {
                    console.log(answer.Amount);

                }
                break;
            case 'EUR':
                if (answer.CurrencyTo === "USD"){
                    console.log(answer.Amount * EURTOUSD);

                } else if (answer.CurrencyTo === "PKR"){
                    
                    console.log(answer.Amount * EURTOPKR);

                } else {

                }
                break;
        }
repeat = await Repeat()

    } while (repeat === true)

}

async function Repeat (){
    let again = await inquirer.prompt([{
        name: "repeat",
        type: "list",
        choices: ['y', 'n'],
        message: "Do you want to make another conversion"
    }]);

    return again.repeat === 'y'? true: false
}

converter()

