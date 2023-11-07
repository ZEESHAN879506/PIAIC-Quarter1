/*35. Animals: Think of at least three different animals that have a common characteristic. Store the names of these animals in a list,
 and then use a for loop to print out the name of each animal. */
 let animals:string[]=['Dog','Cat','Parrot'];
 for (let i=0; i<animals.length; i++){
     console.log(animals[i]);
 };
/*•Modify your program to print a statement about each animal, such as A dog would make a great pet.*/ 
let animals1=['Dog','Cat','Parrot'];
for (let animal of animals1){
 console.log(`The ${animal} would make a great pet`);
};
/*•Add a line at the end of your program stating what these animals have in common.
You could print a sentence such as Any of these animals would make a great pet!*/
let animals2=['Dog','Cat','Parrot'];
for (let anemal of animals2){
   console.log(`The ${anemal} would make a great pet`);
};
console.log(`${animals2[2]} would make a great pet.`);
