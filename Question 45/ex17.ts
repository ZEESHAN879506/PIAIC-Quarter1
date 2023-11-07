/*You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
• Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
• Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, 
  print a message to that person letting them know you’re sorry you can’t invite them to dinner.
• Print a message to each of the two people still on your list, letting them know they’re still invited.
• Remove the last two names from your list, so you have an empty list. Print your list to make sure you 
actually have an empty list at the end of your program.*/
let guests3 :string[]=["Ahmed","Usman","Amir","Hamza","Ahsan","Fiaz"];
let older1:string="Usman";
let newer1:string="Ikram";

for(let i=0; i<guests3.length; i++ ){
    if(guests3[i]===older1) {
    console.log("Unfortunately,"+older1+" can't make it to dinner.");
    guests3[i]=newer1;
    }
    console.log("Dear "+guests3[i]+"!, You are pleasently invited to dinner. Please join us on sunday evening.");
}

console.log("Good news! We found a bigger dinner table.");
let moreguest1:string[]=["Arif","Huzaifa","Usama"];
guests3.unshift("Arif");
let middle1:number=Math.floor(guests3.length/2);
guests3.splice(middle1 ,0 ,"Huzaifa");

guests3.push("Usama");
for(let i=0; i<guests3.length; i++ ){
    console.log("Dear "+guests3[i]+"!, You are invited to dinner.Please join us on sunday evening.");
}

console.log("Oops! The new dinner table won't arrive in time.");
console.log("Sorry, we can invite only two people for the dinner.");
while(guests3.length >2){
    let removeguest:string=guests3.pop()!;
    console.log("sorry,"+removeguest+" we can't invite you to dinner.");
}

for(let i=0; i<guests3.length; i++ ) {
    console.log("Dear "+guests3[i]+"!, You are still invited to dinner.Please join us on sunday evening.");
} 

guests3.pop();
guests3.pop();
console.log(guests3);
