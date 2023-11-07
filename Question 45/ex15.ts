/* 15.You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. 
You’ll have to think of someone else to invite.
• Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.
• Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
• Print a second set of invitation messages, one for each person who is still in your list.*/
let guests:string[]=["Ahmed","Usman","Amir","Hamza","Ahsan","Fiaz"];
let oldOne:string="Usman";
let newOne:string="Ikram";

for (let i=0; i<guests.length; i++ ){
    if(guests[i]===oldOne) {
        console.log("Unfortunately, "+oldOne+" can't make it to dinner.");
        guests[i]= newOne;    
    }
    console.log("Dear "+guests[i]+"!, You are pleasently invited to dinner.Please join us on sunday dinner.")
}
