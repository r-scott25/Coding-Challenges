// Have the function FirstFactorial(num) take the num parameter being passed and return the factorial of it. For example: if num = 4, then your program should return (4 * 3 * 2 * 1) = 24. For the test cases, the range will be between 1 and 18 and the input will always be an integer.
// Examples
// Input: 4
// Output: 24
// Input: 8
// Output: 40320


function firstFactorial(num){
 if (num === 0 || num ===1)
   return 1;
  for (let i = num - 1; i >= 1; i--){
    num = num * i;
  }
  
  return num;
}

console.log(firstFactorial(0));
console.log(firstFactorial(1));
console.log(firstFactorial(4));
console.log(firstFactorial(8));