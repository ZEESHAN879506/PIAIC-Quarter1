import inquirer from "inquirer";
import chalk from "chalk";
import chalkanimation from "chalk-animation";
import { exit } from "process";

function sleep(time:number){
    return new Promise(res=>{
        setTimeout(res,time)
    })
}

const validateNum = (num:number) => {
    if(Number.isNaN(num)){
    console.log(chalk.bgRed("Error Not a Number Please Enter a Valid Number \t\t") + chalk.bgGreen(" Example=> (12345) "));
    return false;
    }
    else return true;        
}



  


async function start() {
      // Game variables
      let enemies: string[] = ["Skeleton", "Zombie", "Warrior", "Assassin"];
      let maxEnemyHealth = 75;
      let enemyAttackDamage = 25;
  
      // Player variables
      let health = 100;
      let attackDamage = 50;
      let numHealthPotions = 3;
      let healthPotionHealAmount = 30;
      let healthPotionDropChance = 50; 
  
    let running: boolean = true;
    while (running) {
    console.log("----------------------------------------");

   
    let enemyHealth = maxEnemyHealth;
    let enemyIndex = Math.floor(Math.random() * enemies.length);
    let enemy = enemies[enemyIndex];
    if (enemies.length >0) {
    enemies.splice(enemyIndex, 1);
    }
    else{

    console.log("\n\n");
    await sleep(1500);
    let rainbowTitle=chalkanimation.rainbow( `\t\t <---# CONGRATULATIONS #--->\n\t<--  You  Have  Defeated  All  Enemies  -->\n\n`)
    await sleep(2500);
    rainbowTitle.stop();
    console.log("\n\n");
    running =false;
    break;
    }

      let rainbowTitle=chalkanimation.neon( `\n\t # ${enemy} appeared! #\n\n`)
      await sleep(2000);
      rainbowTitle.stop();
    
      while (enemyHealth > 0) {
        console.log(chalk.green.bold("\t Your HP: " + health));
        console.log(chalk.red.bold(`\t ${enemy}'s HP: ${enemyHealth}`));
      
        console.log("\n")
        const ask = await inquirer.prompt(
            {
                type:"list",
                message:chalk.cyan(" What would you like to do?"),
                name:"input",
                choices:["Attack", "Drink health potion"]
            });

       

        if (ask.input === "Attack") {
          let damageDealt: number = attackDamage;
          let damageTaken: number = enemyAttackDamage;

          enemyHealth -= damageDealt;
          health -= damageTaken;

          console.log(chalk.bgGreen.inverse.bold(`\t You strike the ${enemy} for ${damageDealt} damage.`));
          console.log(chalk.bgRed.inverse.bold(`\t You receive ${damageTaken} damage in retaliation.`));
          await sleep(1500);
          if (health < 1) {
            console.log(chalk.bgRed("\n You have taken too much damage, you are too weak to go on."));
            console.log("\n\n");
            let rainbowTitle=chalkanimation.neon( `\t\t# GAME OVER # \n\t<--  You  Are  Defeated  -->\n\n`)
            await sleep(2500);
            rainbowTitle.stop();
            running =false;
          }
        } 
        else if (ask.input === "Drink health potion") {
          if (numHealthPotions > 0) {
            health += healthPotionHealAmount;
            numHealthPotions--;
            console.log(chalk.bgGreen(`\t You drink a health potion, healing yourself for ${healthPotionHealAmount}.\n` ));
            console.log(chalk.bgGreen.inverse.bold(`\t Now You have ${health} HP.`));
            console.log(chalk.bgRed.inverse.bold(`\t You have ${numHealthPotions} health potions left.\n\n`));
          } else {
            console.log(chalk.bgRed("\n\t You have no health potions left! Defeat enemies for a chance to get one!"));
            console.log("\n\n")
          }
        }
    }
    if(enemyHealth<0 && health>0) {
      console.log("----------------------------------------");
      console.log(chalk.bgGreen(`\t # ${enemy} was defeated! #`));
      console.log(chalk.bgGreen.inverse.bold(`\t # You have ${health} HP left.#`));

      if (Math.random() * 100 < healthPotionDropChance) {
        numHealthPotions++;
        await sleep(1500);
        console.log(chalk.bgMagenta.bold(`\t # You get a health postion #`));
        console.log(chalk.bgGreen.inverse.bold(`\t # Now You have ${numHealthPotions} health potion(s). #`));
        console.log(`\n`);
      }
    }
       
    }

    

}


async function app(){
    console.log("\n\n");
    let rainbowTitle=chalkanimation.rainbow( `\tWelcome to the Dungeon!\n\n\n`)
    await sleep(2500);
    rainbowTitle.stop();

    
    let repeat: boolean = true;
    while(repeat){
        await start();
        
        console.log("\n\n\n");
        const answer = await inquirer.prompt(
            {
                type:"list",
                message:chalk.bgRed("Select From Options"),
                name:"repeat",
                choices:["Countinue Application", "Exit Application"]
            });

            if(answer.repeat==="Exit Application") {
                console.log("\n\n");
                console.log(chalk.bgRed(" You exit the dungeon, successful from your adventures!"));
                console.log(chalk.green("\t\t########################"));
                console.log(chalk.green("\t\t# THANKS FOR PLAYING! #"));
                console.log(chalk.green("\t\t########################"));
                repeat =false; exit(1);
            }
    }   
}

app();