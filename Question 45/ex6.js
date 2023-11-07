/* 6.store a person name, and include some white space characters at the begining and end of the name.
Make sure you use each character combination,"\t" and "\n",at least once.Pront the name once, so the white space
around the name is displayed.Then print the name after striping the white spaces.*/
//print with whitespace:
var nameWithWhitespace = "\t\n\n  Nasir Ali  \n  \n\t";
console.log("Name with whitespcae: " + nameWithWhitespace);
//print with striped:
var stripedname = nameWithWhitespace.trim();
console.log("Striped Name: " + stripedname);
