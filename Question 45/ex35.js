/*35. Animals: Think of at least three different animals that have a common characteristic. Store the names of these animals in a list,
 and then use a for loop to print out the name of each animal. */
var animals = ['Dog', 'Cat', 'Parrot'];
for (var i = 0; i < animals.length; i++) {
    console.log(animals[i]);
}
;
/*•Modify your program to print a statement about each animal, such as A dog would make a great pet.*/
var animals1 = ['Dog', 'Cat', 'Parrot'];
for (var _i = 0, animals1_1 = animals1; _i < animals1_1.length; _i++) {
    var animal = animals1_1[_i];
    console.log("The ".concat(animal, " would make a great pet"));
}
;
/*•Add a line at the end of your program stating what these animals have in common.
You could print a sentence such as Any of these animals would make a great pet!*/
var animals2 = ['Dog', 'Cat', 'Parrot'];
for (var _a = 0, animals2_1 = animals2; _a < animals2_1.length; _a++) {
    var anemal = animals2_1[_a];
    console.log("The ".concat(anemal, " would make a great pet"));
}
;
console.log("".concat(animals2[2], " would make a great pet."));
