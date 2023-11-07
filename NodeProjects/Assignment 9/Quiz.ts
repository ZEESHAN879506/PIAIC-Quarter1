// The app will show the students multiple choice questions and promt the user to reply,
// In the end it will show the students the result of the quiz
// User Can Saw Correct Answer Of His Wrong Answers,
// User Can Add Questions


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

type Question ={question:string,option1:string,option2:string,option3:string,option4:string,correctOption:string};

let allQuestions:Question[]=[
      {
        question: "What is the purpose of an 'if' statement in programming?",
        option1: "To create a loop",
        option2: "To declare a variable",
        option3: "To make decisions or control the flow of a program",
        option4: "To define a function",
        correctOption: "To make decisions or control the flow of a program"
      },
      {
        question: "Which programming language is often used for web development and can run in web browsers?",
        option1: "Java",
        option2: "C++",
        option3: "Python",
        option4: "JavaScript",
        correctOption: "JavaScript"
      },
      {
        question: "What does the term 'API' stand for in the context of software development?",
        option1: "Application Programming Interface",
        option2: "Advanced Program Instruction",
        option3: "Automated Program Interaction",
        option4: "All-Purpose Integration",
        correctOption: "Application Programming Interface"
      },
      {
        question: "In binary, what is the value of 1010 in decimal?",
        option1: "2",
        option2: "5",
        option3: "10",
        option4: "15",
        correctOption: "10"
      },
      {
        question: "What is the role of a compiler in programming?",
        option1: "It executes the code line by line",
        option2: "It translates source code into machine code",
        option3: "It optimizes the code for performance",
        option4: "It generates random numbers",
        correctOption: "It translates source code into machine code"
      },
      {
        question: "What is the time complexity of a linear search algorithm?",
        option1: "O(1)",
        option2: "O(log n)",
        option3: "O(n)",
        option4: "O(n^2)",
        correctOption: "O(n)"
      },
      {
        question: "Which data structure follows the Last-In-First-Out (LIFO) principle?",
        option1: "Queue",
        option2: "Stack",
        option3: "Linked List",
        option4: "Heap",
        correctOption: "Stack"
      },
      {
        question: "What does the acronym 'HTML' stand for in web development?",
        option1: "Hyper Text Markup Language",
        option2: "High-Level Text Manipulation Language",
        option3: "Hyperlink and Text Markup Language",
        option4: "Home Tool for Managing Links",
        correctOption: "Hyper Text Markup Language"
      },
    
      {
        question: "In object-oriented programming, what is the concept of bundling data and methods that operate on that data into a single unit called?",
        option1: "Class",
        option2: "Module",
        option3: "Function",
        option4: "Interface",
        correctOption: "Class"
      },
      {
        question: "Which sorting algorithm has an average time complexity of O(n log n) and is considered efficient for most practical cases?",
        option1: "Bubble Sort",
        option2: "Insertion Sort",
        option3: "Quick Sort",
        option4: "Selection Sort",
        correctOption: "Quick Sort"
      }
    
]

async function addQuizQuestion() {
    let repeat:boolean =true;
    while(repeat){
    const answer = await inquirer.prompt([
        {
          type:"input",
          name:"question",
          message:"Please Enter Your Question",
        },
        {
          type:"input",
          name:"option1",
          message:"Please Enter Your First Option",
        },
        {
            type:"input",
            name:"option2",
            message:"Please Enter Your Second Option",
        },
        {
            type:"input",
            name:"option3",
            message:"Please Enter Your Third Option",
        },
        {
            type:"input",
            name:"option4",
            message:"Please Enter Your Fourth Option",
        }
    ]);

    let options:string[]=[answer.option1,answer.option2,answer.option3,answer.option4];
    const answer1 = await inquirer.prompt(
        {
            type:"list",
            name:"corectOption",
            message:"Please Select Correct Option From The Given Choises",
            choices:options
        }
    )

    let q:Question ={
        question:answer.question,
        option1:answer.option1,
        option2:answer.option2,
        option3:answer.option3,
        option4:answer.option4,
        correctOption:answer1.corectOption
    }

    allQuestions.push(q);
    const answer2 = await inquirer.prompt(
        {
            type:"list",
            name:"repeat",
            message:chalk.bgRed.inverse("Do You Want To Add More Questions"),
            choices:["YES","NO"]
        }
    )
   
    if(answer2.repeat==="NO") repeat=false;
}
}

async function takeQuiz() {
    let incorrectQuestion:Question[]=[];
    let score:number=0;
    for (const q of allQuestions){
        let options:string[]=[q.option1,q.option2,q.option3,q.option4];
        const answer = await inquirer.prompt(
            {
                type:"list",
                name:"corectOption",
                message:chalk.bgRed.inverse(q.question),
                choices:options
            }
           
        )
        console.log("\n");
        if(answer.corectOption===q.correctOption){
            score++ 
        }
        else{
            incorrectQuestion.push(q);
        }
       
    }
   let animate = chalkanimation.neon(`\t\t You Correct Answer Score is  ---<    ${score}    >--- `)
    
    await sleep(2500);
    console.log("\n\n")
    animate.stop();

    const answer2 = await inquirer.prompt(
        {
            type:"list",
            name:"check",
            message:chalk.bgMagenta("Do You Want To Check Right Answer Of Your Wrong Answers"),
            choices:["YES","NO"]
        }
    )
    if(answer2.check==="YES"){
        console.log("\n")
        if(incorrectQuestion.length>0){
            for (const q of incorrectQuestion){
                console.log(chalk.bgRed.inverse(`\t ${chalk.bold("Question:")} ${q.question}. `));
                console.log(chalk.bgGreen.inverse(`\t ${chalk.bold("Correct-Answer:")} ${q.correctOption} `));
                console.log("\n")
                await sleep(2000);

            }
        } 
    }
   
  
}

 
async function start(){
   

    const answer = await inquirer.prompt([
        {
          type:"list",
          name:"choice",
          message:"Please Select From the Given Choises",
          choices:["Take-Quiz","ADD-Question"]
        }
    ]);
    if(answer.choice==="Take-Quiz"){
        await takeQuiz();
    }
    else if (answer.choice==="ADD-Question"){
        await addQuizQuestion();
    }

   
}




async function app(){
    let rainbowTitle=chalkanimation.rainbow( `\tThe app will show the students multiple choice questions and promt the user to reply,\n\tIn the end it will show the students the result of the quiz, \n\tUser Can Saw Correct Answer Of His Wrong Answers, \n\tUser Can Add Questions \n\n\n`)
    await sleep(2000);
    rainbowTitle.stop();

    
    let repeat:boolean=true;
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
                repeat =false; exit(1);
            }
    }   
}

app();