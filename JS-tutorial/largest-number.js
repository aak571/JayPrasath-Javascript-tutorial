/****************************************************Largest Number*****************************************/

const num1 = 10000, num2 = 5000, num3 = 2000
// console.log(Math.max(num1, num2, num3))

// program to find the largest among three numbers

// take input from the user
let largest;

// check the condition
if (num1 >= num2 && num1 >= num3) {
    largest = num1;
}
else if (num2 >= num1 && num2 >= num3) {
    largest = num2;
}
else {
    largest = num3;
}

// display the result
console.log("The largest number is " + largest);