/*29.Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if
statements that check for certain fruits in your array.
• Make a array of your three favorite fruits and call it favorite_fruits.
• Write five if statements. Each should check whether a certain kind of fruit is in your array. If the
fruit is in your array, the if block should print a statement, such as You really like bananas!*/
var favourite_fruit = ['Apple', 'Mango', 'Banana'];
if (favourite_fruit[0] === 'Watermelon') {
    console.log("You really like Watermelon!.");
}
else if (favourite_fruit[1] === 'Pomegranade') {
    console.log("You really like Pomegranade!.");
}
else if (favourite_fruit[2] === 'Apple') {
    console.log("You really like Apple!.");
}
else if (favourite_fruit[4] === 'PineApple') {
    console.log("You really like PineApple!.");
}
else if (favourite_fruit[2] === "Banana") {
    console.log("You really like Bananas!.");
}
else {
    console.log("Fruit not matched.");
}
;
