// This project is a simple console based Student Management System.
// In this project add new students,
// How to generate a 5 digit unique studentID for each student,
// How to enroll students in the given courses.
// Also, implementing the following operations enroll, view balance, pay tuition fees, show status, etc.
// The status will show all the details of the student including name, id, courses enrolled and balance.



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

type Course ={courseName:string,courseFee:number};

const allCourses:Course[]=[
    {courseName:"Typescript",courseFee:100},
    {courseName:"Java",courseFee:50},
    {courseName:"C++",courseFee:80},
    {courseName:"C#",courseFee:200}
]

let CourseList:string[] =[];

allCourses.forEach(x=>{CourseList.push(x.courseName)})

class Student {
   private static numId =12344
    Id:number
    password:string;
    name:string;
    balance:number;
    enrollCourses:Course[];
   

    constructor(password:string,name:string){
        this.Id=Student.numId +1
        Student.numId +=1;
        this.password =password;
        this.name=name;
        this.balance=Math.floor(Math.random()*1000);
        this.enrollCourses =[];
    }

    async addBalance() {
        const answer = await inquirer.prompt([
            {
              type:"number",
              name:"amount",
              message:"Please Enter Your Amount To be Added"
            }
        ]);
        if(validateNum(answer.amount) && answer.amount>0){
            this.balance += answer.amount;
            console.log("\n")
            console.log(chalk.bgGreen(`\t Your Ammount: ${chalk.bold.bgMagenta.inverse(answer.amount)} is Added in Your Account `)); 
            this.viewBalance();
        }else console.log(chalk.bgRed(`\t Some Thing Went Wrong `)); 
                       
       
    }
    async viewBalance() {
        console.log("\n")
        console.log(chalk.bgBlue(`\t Available Blance is:${this.balance} `));                
    }
    async viewStatus(){
        console.log("\n")
        console.log(chalk.bgCyan.inverse(`\t Your UserID is:${chalk.bold.bgMagenta.inverse(this.Id + "------")}\n\t Your Name is:${chalk.bold.bgMagenta.inverse(this.name + "------")}\n\t Your Balance is:${chalk.bold.bgMagenta.inverse(this.balance + "------")}`)); 
        await this.viewCourses();
    }
    async addCourse(){
        
        const answer = await inquirer.prompt([
            {
              type:"list",
              name:"courses",
              message:"Please Select Course",
              choices: CourseList
            }
        ]);

        let found:boolean = false;
        this.enrollCourses.map( y =>{
           if(y.courseName ===answer.courses) found =true;
        })
           if(!found){                 
           let newcourse = findCourse(answer.courses);
               if(this.balance>newcourse.courseFee){
                       
                   const answer1 = await inquirer.prompt([
                       {
                           type:"list",
                           name:"pay",
                           message:chalk.bgBlue(`Are You want to Pay Course:${newcourse.courseName} -----------${ chalk.bgRed.inverse(` Fees = ${newcourse.courseFee} RS `)}`),
                           choices: ["YES" , "NO"]
                        }
                    ]);
                            
                        if(answer1.pay == "YES"){
                            this.balance =  this.balance -newcourse.courseFee;
                            this.enrollCourses.push(newcourse)
                            console.log(chalk.bgGreen(`\t You are Successfully Enrolled in this Course : ${answer.courses} `))
                        }
                        else if (answer1.pay == "NO"){
                            console.log(chalk.bgCyan(`\t You Are Not Enroll In This Course:  ${answer.courses} `))
                        }
                      
                }
                else  console.log(chalk.bgRed(`\t Your Account Balance: ${this.balance} is Less Then Course Fee : ${newcourse.courseFee} Please Add Balance First `))
                 
            }
            else{
                console.log(chalk.bgRed(`\t You are Allready Enrolled in this Course : ${answer.courses}`))
            }  
                 
}
    async viewCourses(){
        
        if(this.enrollCourses.length>0){
        console.log(chalk.bold.bgCyan.inverse("\t Your Enrolled Courses are : "))
        this.enrollCourses.forEach(x =>{console.log(chalk.bold.bgMagenta.inverse(`\t Course:${(this.enrollCourses.indexOf(x)+1).toString()} => ${ x.courseName} -------------`))})
        }
        else console.log(chalk.bold.bgRed.inverse("\t You Are Not Enrolled In Any Courses Yet: "))
    }
}

const newStudent = new Student("123","Muhammad Zeeshan");

let Students:Student[] = [newStudent];






async function enableFunctionality(loginStudent:Student) {
    let repeat:boolean=true;
    while(repeat){
    const answer = await inquirer.prompt([
        {
          type:"list",
          name:"choise",
          message:"Please Select From the Given Choises",
          choices:["VIEW-STATUS","VIEW-BALANCE","ADD-BALANCE","VIEW-COURSES-ENROLLED","ENROLE-IN-COURSE","LOGOUT"]
        }
    ]);

    if(answer.choise==="VIEW-STATUS"){
        await loginStudent.viewStatus()
    } 
    else if (answer.choise==="VIEW-BALANCE"){
        await loginStudent.viewBalance();
    }
    else if(answer.choise==="ADD-BALANCE"){
       await loginStudent.addBalance();      
    }
    else if(answer.choise==="VIEW-COURSES-ENROLLED"){
        await loginStudent.viewCourses();
    }
    else if(answer.choise==="ENROLE-IN-COURSE"){
        await loginStudent.addCourse();
    }
    else if (answer.choise==="LOGOUT"){
        console.log(chalk.bgGreen(`Logout Successfully`)); 
        await sleep(2000);
        repeat =false;
    }
 }

}
















async  function login(){
    
    let repeat : boolean =true;
    while(repeat){
        const answer= await inquirer.prompt([
                {
                type:"number",
                message: 'Enter your Student ID', 
                name:"Id",
                },
                {
                type:"input",
                message: 'Enter your Student Password', 
                name:"password",
                }
            ])

       if(validateNum(answer.Id)){
        let newStudent = Students.find(x => x.Id ===answer.Id && x.password === answer.password)
       
            if(!newStudent){
                console.log(chalk.bgRed("UserID or Password Is Incorrect Please Try Again"));
            }
            else  {
                console.log(chalk.bgGreen("Student LogIn Successfully"));
                await sleep(2000);
                await enableFunctionality(newStudent);
                repeat =false;
            }
       }      
    }
}

async function signUp(){

        const answer = await inquirer.prompt([
                
                {
                type:"input",
                message: 'Enter your student Name', 
                name:"name",
                },
                {
                type:"input",
                message: 'Enter your student Password', 
                name:"password",
             }
        ]);

            let newstudent:Student= new Student(answer.password,answer.name);
            console.log("\n");
            console.log(chalk.bgGreen(`student Sign-Up Successfully with Student ID = ${chalk.bold.bgMagenta.inverse(await newstudent.Id)} `));
            Students.push(newstudent);
}

  function findCourse (courseName:string){
    return allCourses.find(x=>x.courseName === courseName )!
}
async function start(){
   

    const answer = await inquirer.prompt([
        {
          type:"list",
          name:"choise",
          message:"Please Select From the Given Choises",
          choices:["LOGIN","SIGN-UP"]
        }
    ]);

    if(answer.choise==="LOGIN"){
        await login();
    }
    else if (answer.choise==="SIGN-UP"){
        await signUp();
    }
  
}




async function app(){
    let rainbowTitle=chalkanimation.rainbow( `This project is a simple console based Student Management System, \nIn this project add new students, \nHow to generate a 5 digit unique studentID for each student, \nHow to enroll students in the given courses. \nAlso, implementing the following operations enroll, view balance, pay tuition fees, show status, etc,\nThe status will show all the details of the student including name, id, courses enrolled and balance,\nLogin Example(Student ID:12345 And Password:123) \n\n\n`)
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