// 3.store a person name in a variable and print that person name in lowercase, uppercase and titlecase.
let personname: string ="Subhan";
console.log("Lowercase: "+personname.toLowerCase());
console.log("Uppercase: "+personname.toUpperCase());
console.log("Titlecase: "+personname.charAt(0).toUpperCase()+personname.slice(1).toLowerCase());