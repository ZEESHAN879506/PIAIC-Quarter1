// This is a simple TODO List Application,
// User first input task,
// Then priority of task is selected,
// To add more task enter Y else N,
// After entering all task user enter Y to sea task List and enter N to Exit Application
// After view All Task User can Delete selected Tasks
import inquirer from "inquirer";
import chalk from "chalk";
import chalkanimation from "chalk-animation";
function sleep(time) {
    return new Promise(res => {
        setTimeout(res, time);
    });
}
const myList = [];
function myTasks() {
    if (myList.length > 0) {
        myList.forEach(task => {
            console.log(chalk.italic.bgGreen(`Task No: ${myList.indexOf(task)} => ${task}`));
        });
    }
    else
        console.log(chalk.italic.bgRed("TODO List is Empty "));
}
async function addTask() {
    let repeat = true;
    while (repeat) {
        const tasks = await inquirer.prompt({
            message: 'Enter your Task',
            name: "task"
        });
        const answer = await inquirer.prompt([
            {
                type: "confirm",
                name: "priority",
                message: "Please Enter Your priority Y/N",
            },
            {
                type: "confirm",
                name: "repeat",
                message: "Want to Add More Tasks"
            }
        ]);
        if (tasks.task != "") {
            if (answer.priority) {
                myList.unshift(tasks.task);
            }
            else
                myList.push(tasks.task);
        }
        else {
            console.log(chalk.italic.bgRed(`Task cannot be Empty`));
            answer.repeat = true;
        }
        if (!answer.repeat)
            repeat = false;
    }
}
function deleteTaskNo(num) {
    myList.splice(num, 1);
    console.log(chalk.italic.bgCyan(`Task No: ${num} Deleted Successfully`));
}
async function deleteTask() {
    let repeat = true;
    if (myList.length != 0) {
        while (repeat) {
            myTasks();
            console.log("\n");
            const taskNo = await inquirer.prompt({
                type: "number",
                message: 'Enter Task no Which You Want To Delete',
                name: "num"
            });
            if (myList.length >= taskNo.num)
                await deleteTaskNo(taskNo.num);
            else {
                console.log(chalk.italic.bgRed("Please Enter correct Task No (Example  =>   1)"));
                await deleteTask();
                return;
            }
            if (myList.length != 0) {
                const answer = await inquirer.prompt([
                    {
                        type: "confirm",
                        name: "repeat",
                        message: "Want to Delete More Tasks"
                    }
                ]);
                if (!answer.repeat)
                    repeat = false;
            }
            else {
                console.log(chalk.italic.bgRed("TODO List is Empty "));
                return;
            }
        }
    }
    else
        console.log(chalk.italic.bgRed("TODO List is Empty "));
}
async function start() {
    const answer = await inquirer.prompt([
        {
            type: "list",
            name: "choise",
            message: "Please Select From the Given Choises",
            choices: ["ADD TASK", "VIEW TASK", "DELETE TASK"]
        }
    ]);
    if (answer.choise === "ADD TASK") {
        await addTask();
    }
    else if (answer.choise === "VIEW TASK") {
        myTasks();
    }
    else if (answer.choise === "DELETE TASK") {
        await deleteTask();
    }
}
async function app() {
    let rainbowTitle = chalkanimation.rainbow(`This is a simple TODO List Application, \nUser first input task, \nThen priority of task is selected, \nTo add more task enter Y else N, \nAfter entering all task user enter Y to sea task List and enter N to Exit Application, \nAfter view All Task User can Delete selected Tasks \n\n\n`);
    await sleep(2000);
    rainbowTitle.stop();
    let repeat = true;
    while (repeat) {
        await start();
        const answer = await inquirer.prompt([
            {
                type: "confirm",
                name: "repeat",
                message: "For Countinue Enter Y For Exit Application Enter N"
            }
        ]);
        if (!answer.repeat)
            repeat = false;
    }
}
app();
