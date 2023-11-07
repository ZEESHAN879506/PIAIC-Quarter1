#!usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from "chalk-animation";
const sleep = () => {
    return new Promise(res => {
        setTimeout(res, 2000);
    });
};
async function welcome() {
    let rainbowTitle = chalkAnimation.rainbow("\n \n \nMy Name Is M Zeeshan \n" + "I am Student of PIAIC Quartor 1 Batch \n \n \n");
    await sleep();
    rainbowTitle.stop();
    let answers = await inquirer.prompt([
        {
            name: "num1",
            type: "number",
            message: chalk.bgCyan.italic(" Enter First Number: \t")
        },
        {
            name: "num2",
            type: "number",
            message: chalk.bgCyan.italic(" Enter Second Number: \t"),
        },
        {
            name: "opt",
            type: "list",
            message: chalk.bgCyan.italic(" Select Operator From The List Given Below: \t"),
            choices: ["ADDITION", "SUBTRACTION", "MULTIPLICATION", "DIVISION"]
        }
    ]);
    if (answers.opt === "ADDITION") {
        console.log(chalk.bgBlue.italic(`\n  ADDITION OF : ${answers.num1} AND ${answers.num2} IS =>     ${answers.num1 + answers.num2} \t`));
    }
    else if (answers.opt === "SUBTRACTION") {
        console.log(chalk.bgBlue.italic(`\n  SUBTRACTION OF : ${answers.num1} AND ${answers.num2} IS =>     ${answers.num1 - answers.num2} \t`));
    }
    else if (answers.opt === "MULTIPLICATION") {
        console.log(chalk.bgBlue.italic(`\n  MULTIPLICATION OF : ${answers.num1} AND ${answers.num2} IS =>     ${answers.num1 * answers.num2} \t`));
    }
    else if (answers.opt === "DIVISION") {
        if (answers.num2 === 0) {
            console.log(chalk.bgRed.italic("\n  NUMBER 2 CANNOT BE NEGATIVE"));
            setTimeout(welcome, 4000);
        }
        else {
            console.log(chalk.bgBlue.italic(`\n DIVISION OF : ${answers.num1} AND ${answers.num2} IS =>     ${answers.num1 / answers.num2} \t`));
        }
    }
    else
        console.log(chalk.bgRed.italic("\n  Some Thing Wents Wrong"));
}
welcome();
