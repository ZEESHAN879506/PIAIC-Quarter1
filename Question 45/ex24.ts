/*24.More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:

• Tests for equality and inequality with strings*/
let a="Lahore";
let b="Multan";
console.log(a==b); //false
console.log(a!=b); //true


// • Tests using the lower case function
function lowercase(str:string):boolean{
    return str===str.toLocaleLowerCase();
}
 let string1="hello";
 let string2="Hello";

 console.log(lowercase(string1));
 console.log(lowercase(string2));
 
 
// Numerical tests involving equality and inequality,
let x:number=56;
let y:number=85;
console.log(x==y);
console.log(x!=y);
// Numerical test involving greater than and less than,
let ab:number=46;
let xy:number=78;
console.log(ab>xy);
console.log(ab<xy);

//Numerical test involving greater than or equal to,and less than or equal to
let abc:number=72;
let xyz:number=45;
console.log(abc>=xyz);
console.log(abc<=xyz);

// • Tests using "and" and "or" operators
let firstNAme="Usman";
let lastName="Khan";
let cast="Rajpoot";
console.log(firstNAme !=lastName && lastName != cast);
console.log(firstNAme ==lastName || lastName !=cast);

// • Test whether an item is in a array
let cities=["Lahore","Karachi","Islamabad","Multan","Peshawar","Faisalabad",];
let city="Multan";
if(cities.indexOf(city)){
    console.log(`${city} is present in array.`);
    } else{`${city} is not present in array.`};

// • Test whether an item is not in a array
let city1="Rawalpindi";
if(cities.indexOf(city1)){
    console.log(`${city1} is present in array.`);
    } else{console.log(`${city1} is not present in array.`)};
