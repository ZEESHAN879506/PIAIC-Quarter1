/*32. Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
• Make a list of five or more usernames called current_users.

• Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.

• Loop through the new_users list to see if each new username has already been used. If it has, 
print a message that the person will need to enter a new username. If a username has not been used,
print a message saying that the username is available.

• Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.*/
let current_users=['irfan908','ahmed890','ahsan675','ikram676','hasan453'];
let new_users=['aaliyan564','ahmed890','saif345','ikram676','bilal563'];
let currentUsersLower = current_users.map(user => user.toLowerCase());
 for(let newuser of new_users){

   newuser =newuser.toLowerCase()
   let found =false;
   for (const currentUser of currentUsersLower){
       if (currentUser===newuser) found =true;
   }
   if (found)console.log(`The username ${newuser} already taken.Please choose a new user_name.`);
   else console.log(`The username ${newuser} is available.`);

 }
