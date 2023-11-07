/*36. Shirt: Write a function called make_shirt() that accepts a size and the text of a message that
  should be printed on the shirt. The function should print a sentence summarizing the size of the
  shirt and the message printed on it. Call the function.*/
function make_shirt(size, text) {
    console.log("I m ".concat(size, " and my name is ").concat(text, " "));
    return make_shirt;
}
;
make_shirt(25, 'Hasan');
