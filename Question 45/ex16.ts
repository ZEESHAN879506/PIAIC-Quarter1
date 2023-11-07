/* 16.You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
• Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
• Add one new guest to the beginning of your array.
• Add one new guest to the middle of your array. 
• Use append() to add one new guest to the end of your list. 
• Print a new set of invitation messages, one for each person in your list.*/
let guests2 :string[]=["Ahmed","Usman","Amir","Hamza","Ahsan","Fiaz"];
let older:string="Usman";
let newer:string="Ikram";

for(let i=0; i<guests2.length; i++ ){
    if(guests2[i]===older) {
    console.log("Unfortunately,"+older+" can't make it to dinner.");
    guests2[i]=newer;
    }
    console.log("Dear "+guests2[i]+"!, You are pleasently invited to dinner. Please join us on sunday evening.");
}

console.log("Good news! We found a bigger dinner table.");
let moreguest:string[]=["Arif","Huzaifa","Usama"];
guests2.unshift("Arif");
let middle:number=Math.floor(guests2.length/2);
guests2.splice(middle ,0 ,"Huzaifa");

guests2.push("Usama");
for(let i=0; i<guests2.length; i++ ){
    console.log("Dear "+guests2[i]+"!, You are invited to dinner.Please join us on sunday evening.");
}