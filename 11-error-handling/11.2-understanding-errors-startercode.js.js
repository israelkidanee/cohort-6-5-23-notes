// Import JavaScript's fs library (used to read and write text files)
const fs = require('fs')


/* 
LETS CREATE SOME ERRORS SO WE CAN LEARN HOW TO READ AND UNDERSTAND ERRORS- USE NODE DOCUMENTATION

EVERY ERROR HAS: ERROR CODE, ERROR MESSAGE

*/ 

console.log("HELLOOO")
// const someFile = require("./someFile")


fs.writeFile("/temp/test", "Hello!");
console.log("GOODBYE")



// EXAMPLE OF SYSTEM ERROR: ATTEMPTING TO READ FROM A FILE THAT DOES NOT EXIST IN THIS SYSTEM.
const content = fs.readFileSync("idontexist.txt")

//SYNTAX ERRORS: WHEN JAVASCRIPT GRAMMAER (SYNTAX) RULES ARE BROKEN

//TYPE ERRORS: WHEN YOU MISUSE A DATATYPE AS IF IT WAS ANOTHER DATA TYPE

//ASSERTION ERRORS: ERRORS GENERATED BY TESTS WHEN ASSERTING: "expect(actual).to.equal(expected)"