// This is a simple Currency converter Online Application,
// Internet Connection is Required For This Application,
// User first input his currency,
// Then Converted Value is Entered,
// Enter Coverted Currency,
// Result Will be showend.
// After this for countinue enter Y and enter N to Exit Application,

import axios from 'axios';
import chalk from 'chalk';
import chalkAnimation from "chalk-animation"
import inquirer from 'inquirer';

function sleep(time:number){
    return new Promise(res=>{
        setTimeout(res,time)
    })
}

type currency ={currency:string ;rate:number}
const AllCurrwncies:string[]=[
    "PKR" ,     "AED" ,     "AUD" , 
    "CAD" , 	"CHF" ,  	"CNY" , 
   	"EGP" , 	"ERN" , 	"EUR" , 	
    "GBP" , 	"INR" , 	"IQD" , 		
    "JPY" , 	"KWD" , 	"NZD" , 	
 	"SZL" ,     "USD" , 	 ]


async function fetchCurrencies() {
    let selectedCurrency:string;
    let convertedCurrency:string;
    let inputValue :number;

    const answer = await inquirer.prompt([
        {
            message:chalk.bgYellow("Available Currencies "+AllCurrwncies ) + `\n ${chalk.bgBlue(" Please Select Your Currency")} \t`,
            type:"list",
            name:"selectedCurrency",
            choices:AllCurrwncies
        }
        ,
        {
            message: ` ${chalk.bgBlue("Please Enter Value You want to convert")}`,
            type:"number",
            name:"inputValue"
        }
        ,
        {
            message:chalk.bgYellow("Available Currencies "+AllCurrwncies ) + `\n ${chalk.bgBlue(" Please Select Your Conversion Currency")} \t`,
            type:"list",
            name:"convertedCurrency",
            choices:AllCurrwncies
        }
    ])
    selectedCurrency=answer.selectedCurrency;
    convertedCurrency=answer.convertedCurrency;
    inputValue = answer.inputValue;

  try {
    const response = await axios.get(`https://open.er-api.com/v6/latest/${selectedCurrency}`); 
    let currenciesRate:{currency:number} =response.data.rates;
    const allCurrencies =Object.keys(currenciesRate);
    const allCurrenciesRate =Object.values(currenciesRate);
    let  currencies:currency[]=[];
    for (let i =0; i< allCurrencies.length; i++){
       const cur:currency={currency:allCurrencies[i],rate:allCurrenciesRate[i]}
       currencies.push(cur);
    }

    let inputCurrency = currencies.find(x =>x.currency==selectedCurrency)
    let outputCurrency =currencies.find(x =>x.currency==convertedCurrency)
    if(outputCurrency && inputCurrency){
    console.log(chalk.bgGreen(`\t${inputValue} ${inputCurrency.currency} => ${outputCurrency.rate* inputValue} ${outputCurrency.currency} `))
    }

  } catch (error) {
    console.log(chalk.bgRed("Some Thing Went Wrong Please First Check Your Internet Connection"))
  }
}

async function start (){
    let rainbowTitle=chalkAnimation.rainbow( `\nThis is a simple Currency converter Online Application, \nInternet Connection is Required For This Application, \nUser first input his currency, \nThen Converted Value is Entered, \nEnter Coverted Currency, \nResult Will be showend, \nAfter this for countinue Application enter Y OR enter N to Exit Application, \n\n\n`)
    await sleep(2000);
    rainbowTitle.stop();


    let repeat:boolean=true;
    while(repeat){
        await fetchCurrencies();
        console.log("\n\n\n");
        const answer = await inquirer.prompt(
            {
                type:"list",
                message:chalk.bgRed("Select Options"),
                name:"repeat",
                choices:["Countinue Application", "Exit Application"]
            });

            if(answer.repeat==="Exit Application") repeat =false;

    }

}

start();