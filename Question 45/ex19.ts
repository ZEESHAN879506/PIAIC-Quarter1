/*Working with one of the programs from Exercises 14 through 18, print a message indicating the number of 
people you are inviting to dinner.*/
let guest4:string[]=["Ahmed","Usman","Amir","Hamza","Ahsan","Fiaz"];
for(let i=0; i<guest4.length; i++){
    console.log("Dear "+guest4[i]+"!, You are pleasingly invited to dinner.Please join us on Sunday dinner.");
} 

console.log("Number of people invited to dinner: ",guest4.length);
