/*41. Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each
 magician in the array.*/
var magicians_name = ['inam', 'inayat', 'ali', 'ahsan'];
function show_magicians(magicians_name) {
    for (var _i = 0, magicians_name_1 = magicians_name; _i < magicians_name_1.length; _i++) {
        var magician = magicians_name_1[_i];
        console.log(magician);
    }
    ;
}
;
console.log(show_magicians(magicians_name));
