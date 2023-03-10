// exe 1
// Write a function to convert Celsius to Fahrenheit
// Function `calFahrenheit` returns the converted Celsius value to Fahrenheit value based on the formula `(Celsius × 9/5) + 32 = Fahrenheit`
// console.log(calFahrenheit(20)) //68

function calFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
  }
  
  console.log(calFahrenheit(20)); // 68

  console.log(calFahrenheit(0)); // 32
console.log(calFahrenheit(100)); // 212
console.log(calFahrenheit(-40)); // -40



// exe 2
// Write a function to reverse a number
// console.log(reverseNum(123)) //321

// exe 3
// Count number of Vowels in String
// Function `countVowel` returns the number of vowels in input string.
// console.log(countVowel("Hello")) //2

// exe 4
// Write a function to check if an input string is a palindrome
// Function `checkPalindrome` return a boolean value based on whether the input string is palindrome or not.
// a palindrome is a word, phrase or number which reads the same backwards as it does when being read forwards.
// console.log(findPalindrome("racecar")) //true

// exe 5
// Write a function to generate a random number
// Function `genRandom` return a generated random integer number between the provided start and end range.
// console.log(genRandom(1,10)) // random int between 1 to 10

// exe 6
// Write a function to find Factorial of a number
// Function `getFactorial` return the factorial of a number using the formula `n*(n-1)*(n-2)*…` .
// console.log(getFactorial(5)) // 120

// exe 7
// Write a function to add unlimited numbers
// Function `addNumber()` return the sum of all the number passed as arguments of the function.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
// console.log(addNumber(10,45,34,130)) // 219