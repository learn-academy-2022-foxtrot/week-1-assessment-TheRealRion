// ASSESSMENT 1: Coding Practical Questions

// To run file: navigate to the correct directory in terminal, $ node code-challenges.js

// Describing your process is required.

// --------------------INSTRUCTOR EXAMPLE: Create the code that determines which of the two strings has more characters. Use the two sets of test variables provided.

// Describe your process:

// Set one:
const fruit1 = "apple"
const fruit2 = "banana"
// Expected outcome: "banana"

// Set two:
// const fruit1 = "cherry"
// const fruit2 = "kiwi"
// Expected outcome: "cherry"

// --------------------1) Create the code that determines if a given number is below boiling point, at boiling point, or above boiling point. Boiling point is 212 degrees Fahrenheit. Use the test variables provided below.

// Describe your process:
// 1. establish a variable for current temp
// 2. compare temp to various outcomes
    // temp to boiling (===)
    //temp to below boiling (t < 212)
    // temp to above boiling (t > 212)
//3. log answer to console

let temp = 42

if (temp === 212) {
    console.log(temp + " is at boiling point")
} else if (temp < 212) {
    console.log(temp + " is below boiling point")
} else if (temp > 212) {
    console.log(temp + " is above boiling point")
}


// Expected output: "42 is below boiling point"
    //Console logged as expected! :)  

 temp = 350

if (temp === 212) {
    console.log(temp + " is at boiling point")
} else if (temp < 212) {
    console.log(temp + " is below boiling point")
} else if (temp > 212) {
    console.log(temp + " is above boiling point")
}


// Expected output: "350 is above boiling point"
    //Console logged as expected! :) 
temp = 212

if (temp === 212) {
    console.log(temp + " is at boiling point")
} else if (temp < 212) {
    console.log(temp + " is below boiling point")
} else if (temp > 212) {
    console.log(temp + " is above boiling point")
}


// Expected output: "212 is at boiling point"
    //Console logged as expected! :) 

// --------------------2) Create the code that will combine the two arrays and return the length using the test variables provided below.

// Describe your process:
    //1. count length of first array (.length)
    //2. count length of second array (.length)
    //3. add lengths together (+)
    //4. log answer


const padres1984WorldSeriesRuns = [2, 5, 2, 2, 4]
const padres1998WorldSeriesRuns = [6, 3, 5, 3]

console.log(padres1984WorldSeriesRuns.length + padres1998WorldSeriesRuns.length)



// Expected output: 9
    //Console logged as expected! :) 1984 logs 5 games, 1998 logs 4 games. 5+4=9(output). 

// --------------------3) Create the code that will reverse the letters of a string using the test variable provided below.

// Describe your process:
    //1. split string into array (.split(""))
    //2. reverse array (.reverse())
    //3. join array back together (.join(""))
    //4.log output


const currentCohort = "Foxtrot 2022"

console.log(currentCohort.split("").reverse().join(""))



// Expected output: "2202 tortxoF"
    // Console logged as expected! :) The string was first split into an array, then each character position was reversed before finally the array was joined back together into a string and logged to console. 

// --------------------4) Create the code that will return the last index of the given value from the array using the test variables provided below.

// Describe your process:
    //1. search array for value (.lastIndexOf())
    //2. log output 


const myNumbers = [13, 34, 42, 5, 5, 10, 27, 42, 10]
const givenValue1 = 42

console.log(myNumbers.lastIndexOf(42))

// Expected output: 7
    // Console logged as expected! :) 42 is at index 1 & 7. last index is 7.

const givenValue2 = 10
console.log(myNumbers.lastIndexOf(10))

// Expected output: 8
    // Console logged as expected! :) 10 logged at index 8. 


// --------------------5) Create the code that will sort all the numbers in an array from largest to smallest. Use the test variables provided below.

// Describe your process: 
    //1. take array and sort (.sort())
    //2. reverse order from smallest to biggest (.reverse())
    //2. log output 

const sanDiegoSummerTemperatures = [79, 80, 72, 73, 82, 77, 76]
console.log(sanDiegoSummerTemperatures.sort().reverse())

// Expected output: [82, 80, 79, 77, 76, 73, 72]
    // Console logged as expected! :) First, the numbers were sorted largest to smallest, then the numbers were reversed to put them largest to smallest and logged on the console. 

const sanDiegoWinterTemperatures = [59, 68, 62, 59, 66, 67, 66]
console.log(sanDiegoWinterTemperatures.sort().reverse())

// Expected output: [68, 67, 66, 66, 62, 59, 59] 
    // Console logged as expected! :) First, the numbers were sorted largest to smallest, then the numbers were reversed to put them largest to smallest and logged on the console. 
