/*42. Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies
  the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has 
  actually been modified.*/
  let magicians_name=['inam','inayat','ali','ahsan'];
  function make_great(magicians_name:string[]){
    for(let i=0; i<magicians_name.length; i++){
        console.log("The Great "+ magicians_name[i]);
        
    }
};
console.log(make_great(magicians_name));
