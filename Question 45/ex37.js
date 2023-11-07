/*37. Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message
  that reads I love TypeScript.*/
function make_shirts(size, text) {
    if (size === void 0) { size = "Large"; }
    if (text === void 0) { text = "I love TypeScript."; }
    return { size: size, text: text };
}
;
console.log(make_shirts());
/* Make a large shirt and a medium shirt with the default message, */
function make_shirts1(size, text) {
    if (size === void 0) { size = "Medium"; }
    if (text === void 0) { text = "I love TypeScript."; }
    return { size: size, text: text };
}
;
console.log(make_shirts1());
//   shirt of any size with a different message.
function make_shirts2(size, text) {
    if (size === void 0) { size = "Small"; }
    if (text === void 0) { text = "I love JavaScript."; }
    return { size: size, text: text };
}
;
console.log(make_shirts2());
