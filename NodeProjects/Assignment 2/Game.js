// This is a guess Number Game,
// User has 3 chances to guess write Number which is between 0 to 9,
// For every one Random Number User has Only 5 chance to guess the Number,
// Total Score is Show after Game Ends,
import inquirer from "inquirer";
import chalk from "chalk";
import chalkanimation from "chalk-animation";
function sleep(time) {
    return new Promise(res => {
        setTimeout(res, time);
    });
}
async function guessGame() {
    let chance = 5;
    let Score = 0;
    for (let i = chance; i > 0; i--) {
        console.log("__________________________________________________________________");
        console.log(chalk.bgYellow(`\n   Remaning chance :     ` + chalk.bold(`${i}`) + `   \n`));
        const answer = await inquirer.prompt({
            name: "guess",
            type: "number",
            message: chalk.bgBlue(`   Guess a Number Between 0 to 9  ==>`)
        });
        const rand = Math.floor(Math.random() * 10);
        if (rand === answer.guess) {
            console.log("\n");
            console.log(chalk.bgGreen(`   You Guess a Write Number,         : ${rand}    \n`));
            await sleep(1500);
            i++;
            Score++;
        }
        else {
            console.log("\n");
            console.log(chalk.bgRed(`   You Guess a Wrong Number,     It was: ${rand}    \n`));
            await sleep(1500);
        }
    }
    console.log("\n\n\n");
    console.log("    ***********************    ");
    console.log(chalk.bgGreen.whiteBright.bold(`    YOUR SCORE IS : ${Score}    `));
    console.log("    ***********************    ");
    const rainbowTitle = chalkanimation.neon("\n \n \n      (((((((((((---GAME OVER---)))))))))))      \n \n \n");
    await sleep(2000);
    rainbowTitle.stop();
    console.log("\n\n\n");
    const answer = await inquirer.prompt({
        name: "confirm",
        type: "confirm",
        message: (chalk.bgCyan.bold(`    TO PLAY AGAIN ENTER Y \t TO EXIT GAME ENTER N    `))
    });
    if (answer.confirm) {
        guessGame();
    }
    else {
        const rainbowTitle = chalkanimation.neon("\n \n \n        (((((((((((---THANK YOU---)))))))))))      \n \n \n");
        await sleep(5000);
        rainbowTitle.stop();
    }
    ;
}
async function game() {
    let rainbowTitle = chalkanimation.rainbow(`\n \n \nThis is a guess Number Game,\nUser has 5 chances to guess write Number which is between 0 to 9,\nFor every one Random Number User has Only 5 chance to guess the Number,\nTotal Score is Show after Game Ends,\n \n \n`);
    await sleep(2000);
    rainbowTitle.stop();
    guessGame();
}
game();
