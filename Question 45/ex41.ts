/*41. Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each
 magician in the array.*/
 let magicians_name=['inam','inayat','ali','ahsan'];
 function show_magicians(magicians_name:string[]){
    for(let magician of magicians_name){
       console.log(magician);
       
    }; 
 };
 console.log(show_magicians(magicians_name));