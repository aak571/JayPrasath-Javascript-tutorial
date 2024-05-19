// Normal Function
function add_two_numbers_normal(num1, num2) {
console.log('AWESOME !!!')
console.log('Function invoked !!!')
return num1 + num2
}// function is a block of code.

// Arrow Function
const add_two_numbers_arrow = (num1, num2) => {
console.log('AWESOME !!!')
console.log('Function invoked !!!')
return num1 + num2
}// Latest Javascript syntax, yessssss

console.log('START from here....')

const sum = (number1, number2) => {
    console.log('AWESOME !!!')
    console.log('Function invoked !!!')
    return 'The result' + number1 + number2
}

// const a = 100
// NaN = Not a Number
console.log(add_two_numbers_normal(100, 500))
console.log('END')
console.log(sum(100, 200))

let str1 = 'Hi Hello', str2 = 'Welcome !!!'  // whenever there is a string, '+' will concatenate rather than arithmetic addition
let num = '54354354543'
let foo = 12, loo = 1
// console.log()
console.log(foo + str1 + loo[1] + str2[10] + str1[6] + num[5] + str2)

// 12Hi Hello1!l3Welcome !!!