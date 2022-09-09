// ASSESSMENT 1: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------INSTRUCTOR EXAMPLE: What will this log?
const colors = ["tangerine", "magenta", "lilac", "daffodil"]
// console.log(colors.push("indigo"))

// a) Your answer:
// b) Verify and explain:


// --------------------1) What will this log?

const cohort = "LEARN 2022"
console.log(cohort.length)

// a) Your answer: 10
// b) Verify and explain: .length counts the number of characters in a given string


// --------------------2) What will this log?

const greeting = "Hello World!"
 console.log(greeting[4]) 

// a) Your answer: "l"
// b) Verify and explain: [4] indicates that it will log the 5th character in the string 


// --------------------3) What will this log?

const languages = ["JavaScript", "Ruby", "Python", "C++"]
const index = 1
 console.log(languages[index])

// a) Your answer: "Ruby"
// b) Verify and explain: The console takes the index value and applies it to the language variable (1st index of languages) which returns Ruby. 


// --------------------4) What will this log?

const weekendDays = ["saturday", "sunday"]
console.log(weekendDays.toUpperCase())

// a) Your answer: ["SATURDAY", "SUNDAY"]
// b) Verify and explain: .toUpperCase returns error because the method cannot be used on arrays, only variables


// --------------------5) What will this log?

const dataTypes = ["number", "string", "Boolean"]
console.log(typeof dataTypes.length)

// a) Your answer: number 
// b) Verify and explain: the length of dataTypes is evqluated as "3", which is then typed as a number. 
