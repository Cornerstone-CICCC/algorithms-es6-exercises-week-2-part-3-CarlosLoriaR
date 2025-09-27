// Exercise 4: Recursion
// Instructions: Write a recursive function named `sumOfDigits` that calculates the sum of the elements of a given array. 
// Test your function by calculating the sum of the array and logging the result to the console.

let total = 0
function sumOfDigits(n) {
  if (n.length > 0) {
    total += n.pop()
    sumOfDigits(n)
  }
  return total
}

console.log(sumOfDigits([1, 3, 7, 1, 8])); // 20
