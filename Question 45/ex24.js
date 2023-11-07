/*24.More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:

• Tests for equality and inequality with strings*/
var a = "Lahore";
var b = "Multan";
console.log(a == b); //false
console.log(a != b); //true
// • Tests using the lower case function
function lowercase(str) {
    return str === str.toLocaleLowerCase();
}
var string1 = "hello";
var string2 = "Hello";
console.log(lowercase(string1));
console.log(lowercase(string2));
// Numerical tests involving equality and inequality,
var x = 56;
var y = 85;
console.log(x == y);
console.log(x != y);
// Numerical test involving greater than and less than,
var ab = 46;
var xy = 78;
console.log(ab > xy);
console.log(ab < xy);
//Numerical test involving greater than or equal to,and less than or equal to
var abc = 72;
var xyz = 45;
console.log(abc >= xyz);
console.log(abc <= xyz);
// • Tests using "and" and "or" operators
var firstNAme = "Usman";
var lastName = "Khan";
var cast = "Rajpoot";
console.log(firstNAme != lastName && lastName != cast);
console.log(firstNAme == lastName || lastName != cast);
// • Test whether an item is in a array
var cities = ["Lahore", "Karachi", "Islamabad", "Multan", "Peshawar", "Faisalabad",];
var city = "Multan";
if (cities.indexOf(city)) {
    console.log("".concat(city, " is present in array."));
}
else {
    "".concat(city, " is not present in array.");
}
;
// • Test whether an item is not in a array
var city1 = "Rawalpindi";
if (cities.indexOf(city1)) {
    console.log("".concat(city1, " is present in array."));
}
else {
    console.log("".concat(city1, " is not present in array."));
}
;
