#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from 'chalk-animation';

const sleep = (ms = 3000) => new Promise((r)=> setTimeout(r, 2000))

type myVariable = {
    rand: number;
    enemies: string[];
    maxEnemyHealth: number,
    enemyAttackDamage: number,
    health: number,
    attackDamage: number,
    healthPotionHealing: number,
    healthPotionDropChance: number,
    running: boolean
}

let rand = Math.random();

let enemies = ["SkullZombie", "EvilAlchemist", "RogueWarrior", "NinjaAssasin"]

let maxEnemyHealth = 75;
let enemyAttackDamage = 25;

// Players Variable
let myhealth = 100;
let myHealPotions = 5;
let myattackDamage = 50;
let myhealthPotionHealing = 30;
let myhealthPotionDropChance = 50;

let runningGame = true;

async function welcome() {

    console.log(chalk.bgBlue("\nTHE DUNGEON!\n"));
    

    const name = await inquirer.prompt([{
        name: "name",
        type: "input",
        message: "What's your name?"
    }])
    const message = chalkAnimation.neon(`\n\t${name.name} It's time to break out of the Dungeon!!`); 
    await sleep();
    message.stop();

    console.log(`
    ${chalk.red(`\n\tTime to Fight --- You are under Attack!\n`)}
${chalk.yellowBright(`\tKill all enemies...and get out of the Dungeon!`)}`);

    await sleep();  
}

async function game() {
        
        let enemyHealth = Math.floor(Math.random()*maxEnemyHealth)+1;
        let enemy = enemies[Math.floor(Math.random()*enemies.length)];

        while( runningGame ){
            console.log(chalk.bgBlue.bold(`\t===${enemy} Appeared===`));
            while ( enemyHealth > 0 ){
                console.log(chalk.yellow.bold(`\n\t Your HP: ${myhealth}\t`));
                console.log(chalk.yellow.bold(`\t ${enemy} HP: ${enemyHealth}\t`));
                console.log(chalk.yellow.bold(`\t Potions : ${myHealPotions}\t`));
                console.log(chalk.yellow.bold(`\t What would you like to do?\t\n`));
                console.log(chalk.yellow.bold(`\t 1) Attack (Press 1) \t`));
                console.log(chalk.yellow.bold(`\t 2) Heal Drinking Potion (Press 2) \t`));
                console.log(chalk.yellow.bold(`\t 3) Run! (Press 3) \t\n`));


                const Press = await inquirer.prompt([{
                    type: "input",
                    name: "button",
                    message: "Decide what do you want to do?"
                }]);
                
                switch (Press.button){
                    case "1":
                        let DamageToEnemy = Math.floor(Math.random() * myattackDamage) + 1;
                        let DamageToPlayer = Math.floor(Math.random() * enemyAttackDamage) + 1;
                        enemyHealth -= DamageToEnemy;
                        myhealth -= DamageToPlayer;

                        console.log(chalk.yellow(`\n\t> You Hit ${enemy} for ${DamageToEnemy} damage!`));
                        console.log(chalk.yellow(`\t> You got ${DamageToPlayer} Damage in Dungeon Fight!\n`));

                        // Can player keep fighting/
                        if (myhealth < 1){
                            console.log(chalk.red.bold(`\t You got locked in Dungeon...Dead Now`));

                            runningGame = false;
                            break;
                        }

                        // Is enemy still alive?
                        if (enemyHealth < 1){
                            console.log(chalk.greenBright.bold(`\t You have defeated the enemy and got out of Dungeon...Free Now`));

                            runningGame = false;
                        }

                        // If Player Wins the strike then get healed
                        let TotalhealPotionDrop = Math.random();
                        if (TotalhealPotionDrop <= myhealthPotionDropChance) {
                            myHealPotions++;
                            console.log(chalk.blue(`\t Healing potion dropped!\tTotal Healing Postions Left: ${myHealPotions}\n`));
                            runningGame = false;
                            break;

                        }

                        break;

                    case "2":
                       if (myHealPotions > 0){
                        myhealth += myhealthPotionHealing;
                        myHealPotions--;

                            console.log(chalk.blue.bold(`\t You drank a Healing Potion for ${myhealthPotionHealing} HP!\tYour HP is ${myhealth}`));
                            console.log(chalk.blue.bold(`\n\t You have ${myHealPotions} left!\n`));

                        } else {
                            console.log(chalk.red('\t OOPs... You have no potions left...Die...!'));
                        } 
                        break;

                    case "3":
                        
                        console.log(chalk.bgBlue.bold(`\n\t You ran away from ${enemy}!\n`));
                        await game();                         
                        break;

                    default: 
                        console.log(chalk.bgWhiteBright.bold(`\n\t Invalid choice!\n`));
                        break;
                }
            }
        }

        if (myhealth < 1){
            console.log(chalk.red.bold(`\t You got locked in Dungeon...Dead Now`));
            runningGame = false;
        }
        
}

let keepPlayingGame = false;

async function Repeat (){
    console.clear();

    await welcome();

    do {
        runningGame = true;
        await game();

        let again = await inquirer.prompt([{
            name: "repeat",
            type: "confirm",
            message: "Do you want to play again?"
        }]);
    
        keepPlayingGame = again.repeat;

    } while (keepPlayingGame)   
console.log(chalk.bgBlue.bold(`\n\t Thanks for playing the Dungeon Game\t\n`));

}


Repeat ();

