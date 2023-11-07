/*43. Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names.
 Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each 
 array to show that you have one array of the original names and one array with the Great added to each magician’s name.*/
 let magicians_name=['inam','inayat','ali','ahsan'];
 function make_great(magicians_name:string[]):string[]{
    let great_magician:string[]=[];
    for(let magician1 of magicians_name){
        great_magician.push("The Great "+ magician1);
    }return  great_magician;
 };
 
 function show_magicians(magicians_name:string[]){
    for(let magician2 of magicians_name){
        console.log(magician2);
       
    };
 };

 show_magicians(magicians_name);
make_great(magicians_name);