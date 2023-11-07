// The user will enter a english paragraph,
// Result will be show counting characters and words without whitespaces,
// User will be asked For countinueing Application Or Exit Application,
import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from "chalk-animation";
import { exit } from "process";
function sleep(time) {
    return new Promise(res => {
        setTimeout(res, time);
    });
}
let charCounter = [];
let wordCounter = [];
async function app() {
    const answer = await inquirer.prompt({
        message: ` ${chalk.bgBlue("Please Enter English paragraph")}`,
        type: "editor",
        name: "inputValue"
    });
    if (answer.inputValue != "") {
        wordCounter = answer.inputValue.split(/\s+/);
        charCounter = answer.inputValue.replace(/\s/g, '');
        console.log("\n\n");
        console.log(chalk.bgGreen(`\t Total Number of Words In This Paragraph Are =>----${chalk.bgMagenta.inverse.bold("----" + wordCounter.length + "----")}`));
        console.log("\n");
        console.log(chalk.bgGreen(`\t Total Number of Charachters In This Paragraph Are =>----${chalk.bgMagenta.inverse.bold("----" + charCounter.length + "----")}`));
    }
    else {
        console.log("\n\n");
        console.log(chalk.bgRed("\t Please Enter Some Text First"));
    }
}
async function start() {
    let rainbowTitle = chalkAnimation.rainbow(`\nThe user will enter a english paragraph, \nResult will be show counting characters and words without whitespaces, \nUser will be asked For countinueing Application Or Exit Application, \n\n\n`);
    await sleep(2000);
    rainbowTitle.stop();
    let repeat = true;
    while (repeat) {
        await app();
        console.log("\n\n\n");
        const answer = await inquirer.prompt({
            type: "list",
            message: chalk.bgRed("Select Options"),
            name: "repeat",
            choices: ["Countinue Application", "Exit Application"]
        });
        if (answer.repeat === "Exit Application") {
            repeat = false;
            exit(1);
        }
    }
}
start();
