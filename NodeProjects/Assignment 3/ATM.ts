// This is simple ATM Application,
// User can enter his ID and Password,
// All ATM functionality are visible to user,
// He can View his balance,
// Transfer amount,
// Withdraw amount,
// Add Balance, 
// For reference two User Already exits [{1 userid =123 , password =123} AND {2 userid =1234 , password =1234}]

import inquirer from "inquirer";
import chalk from "chalk";
import chalkanimation from "chalk-animation";
import { exit } from "process";

function sleep(time:number){
    return new Promise(res=>{
        setTimeout(res,time)
    })
}


    const myList:string[]=[];


    async function signUp(){

        let repeat : boolean =true;
        while(repeat){
            const User= await inquirer.prompt([
                    {
                    type:"number",
                    message: 'Enter your User ID', 
                    name:"Id",
                    },
                    {
                    type:"number",
                    message: 'Enter your User Password', 
                    name:"Password",
                    }
                ])

           if(validateNum(User.Id) && validateNum(User.Password)){
            const find = await findUserId(User.Id);
                if(find){
                    console.log(chalk.bgRed(`User is Already Exits With this ID: ${User.Id} Please Try with New Unique ID `));
                    repeat =true;
                }
                else {
                    const newUser:user= {id:User.Id,password:User.Password,balance:Math.ceil(Math.random()* 1000)}
                    console.log(chalk.bgGreen("User Sign-Up Successfully"));
                    users.push(newUser);
                    repeat =false;
                } 

           }
          
           
        }

       
    }

  

    
    type user={
        id:number,
        password:number,
        balance:number
    }
    let users:user[]=[];
    const user1 :user={
        id:123,
        password:123,
        balance:Math.ceil(Math.random()* 1000)
    }

        users.push(user1);
    
    const user2 :user={
        id:1234,
        password:1234,
        balance:Math.ceil(Math.random()* 1000)
    }

    users.push(user2);
    

   const validateNum = (num:number) => {
        if(Number.isNaN(num)){
        console.log(chalk.bgRed("Error Not a Number Please Enter a Valid Number \t\t") + chalk.bgGreen(" Example=> (12345) "));
        return false;
        }
        else return true;        
    }

    async function findUser (user:user) :Promise<boolean>{
        let rtn:boolean = false;
        const findindex = users.findIndex(x => x.id ===user.id && x.password ===user.password )      
        if( findindex >= 0 ){
            rtn =true;
        }
         return rtn
    }

    async function findUserId(id:number) {
        let rtn:boolean = false;
        const findindex = users.findIndex(x => x.id ===id )      
        if( findindex >= 0 ){
            rtn =true;
        }
        return rtn;
    }

    async function viewBalance(id:number) {
        console.log(chalk.bgBlue(`Available Blance :${users[users.findIndex(x => x.id ==id)].balance} `));                
    }

    async function addBalance(id:number,amount:number) {
        const find =await findUserId(id);
        if(find){
        let newUser = users[users.findIndex(x => x.id ==id)];
            if(newUser.balance>=0){
                newUser.balance += amount;
                console.log(chalk.bgGreen(`Amount :${amount} is Added Successfully`)); 
            await viewBalance(id);
            }
                       
       }
    }

    async function withdrawAmount(id:number,amount:number) {
        const find =await findUserId(id);
        if(find){
        let newUser = users[users.findIndex(x => x.id ==id)];
                if(newUser.balance>=amount){
                newUser.balance -= amount;
                console.log(chalk.bgGreen(`Amount :${amount} is Withdraw Successfully`)); 
            await viewBalance(id);
                }
                else{
                    console.log(chalk.bgRed(`Sory Your Acount Balance is Insufficient to Withdraw Amount :${amount}`)); 
                    await viewBalance(id)
                }           
        }
    }

    async function transferAmount(senderId:number,reciverId:number,amount:number) {
        const senderUserID =await findUserId(senderId);
        const reciverUserID =await findUserId(reciverId);

        if(senderUserID && reciverUserID){
        let senderUser = users[users.findIndex(x => x.id ==senderId)];
        let reciverUser = users[users.findIndex(x => x.id ==reciverId)];

                if(senderUser.balance>=amount){
                    senderUser.balance -= amount;
                    reciverUser.balance += amount;

                    console.log(chalk.bgGreen(`Amount :${amount} is Send Successfully To User ID : ${reciverId}`)); 
                    await viewBalance(senderId);
                }
                else{
                    console.log(chalk.bgRed(`Sory Your Acount Balance is Insufficient to Send Amount :${amount}`)); 
                    await viewBalance(senderId)
                }           
        }
        else {
            console.log(chalk.bgRed(`User ID : ${reciverId} is Not Registered Please Enter Correct ID`)); 
            await sleep(1500);
        }
    }

    async function enableFunctionality(loginUser:user) {
        let repeat:boolean=true;
        while(repeat){
        const answer = await inquirer.prompt([
            {
              type:"list",
              name:"choise",
              message:"Please Select From the Given Choises",
              choices:["ADD-BALANCE","VIEW-BALANCE","TRANSFER-AMMOUNT","WITHDRAW-AMOUNT","LOGOUT"]
            }
        ]);

        if(answer.choise==="ADD-BALANCE"){
            const answer = await inquirer.prompt([
                {
                  type:"number",
                  name:"amount",
                  message:"Please Enter Your Amount To be Added"
                }
            ]);
            if(validateNum(answer.amount)){
                await addBalance(loginUser.id,answer.amount);
            }
            
        }
        else if (answer.choise==="VIEW-BALANCE"){
            await viewBalance(loginUser.id);
        }
        else if (answer.choise==="TRANSFER-AMMOUNT"){
            const answer = await inquirer.prompt([
                {
                    type:"number",
                    name:"reciverID",
                    message:"Please Enter Reciver User ID"
                }
                  ,
                {
                  type:"number",
                  name:"amount",
                  message:"Please Enter Transfer Amount"
                }
            ]);
            if(validateNum(answer.amount && validateNum(answer.reciverID))){
            const reciverUserID = await findUserId(answer.reciverID);
            if(reciverUserID){
             await transferAmount(loginUser.id,answer.reciverID,answer.amount);
            }
            else{
                console.log(chalk.bgRed(`Reciver User ID: ${answer.reciverID} Not Exits Please Enter Valid User ID`));         
            }
            }
        }
        else if (answer.choise==="WITHDRAW-AMOUNT"){

            const answer = await inquirer.prompt([
                {
                  type:"number",
                  name:"amount",
                  message:"Please Enter Your Amount To be Withdraw"
                }
            ]);
            if(validateNum(answer.amount)){
                await withdrawAmount(loginUser.id,answer.amount);
            }
          
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
            const User= await inquirer.prompt([
                    {
                    type:"number",
                    message: 'Enter your User ID', 
                    name:"Id",
                    },
                    {
                    type:"number",
                    message: 'Enter your User Password', 
                    name:"Password",
                    }
                ])

           if(validateNum(User.Id) && validateNum(User.Password)){
            const newUser:user= {id:User.Id,password:User.Password, balance:0}
            const find = await findUser(newUser);
                if(find){
                    console.log(chalk.bgGreen("User LogIn Successfully"));
                    await sleep(2000);
                    await enableFunctionality(newUser);
                    repeat =false;
                }
                else  console.log(chalk.bgRed("UserID or Password Is Incorrect Please Try Again"));

           }
           
        }

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
        let rainbowTitle=chalkanimation.rainbow( `This is simple ATM Application,\nUser can enter his ID and Password, \nAll ATM functionality are visible to user, \nHe can View his balance, \nTransfer amount, \nWithdraw amount, \nAdd amount, \nFor reference two User Already exits [{1 userid =123 , password =123} AND {2 userid =1234 , password =1234}] \n\n\n`)
        await sleep(2000);
        rainbowTitle.stop();
        
        let repeat:boolean=true;
        while(repeat){
            await start();
            
            console.log("\n\n\n");
        const answer = await inquirer.prompt(
            {
                type:"list",
                message:chalk.bgRed("Select Options"),
                name:"repeat",
                choices:["Countinue Application", "Exit Application"]
            });

            if(answer.repeat==="Exit Application") {
                repeat =false; exit(1);
            }
        }   
    }

   app();


