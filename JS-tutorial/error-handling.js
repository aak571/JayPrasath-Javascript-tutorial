// Very Very Very Very Very interesting, very important for Web Dev.

// try-catch block (for run-time errors)
try {
    // whatever ur not sure of or whatever u think can cause a potential danger or error should go here.
    console.log('This is before the danger')
    console.log('This is correct') // 100%
    consolelog('Welcome to error handling') // potential error
}
catch (err) {
    // whatever is ur plan to recover or handle the danger
    console.log('OMG, it was an error')
    console.log(err.message)
}

// consolelog('Welcome to error handling') // potential error

try {
    // add 2 numbers
    let a = 10, b = 20, aakash = 'Jay Prasath', aak = 'Hi'
    console.log(aak + aakash) // doubtful
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
    console.log(arr[10])
    console.log('Good going !!!')
    const strs = 'Aakash'
    console.log(str[2])
    console.log('FINAL')
}
catch (err) {
    console.log('ERROR')
    console.log(err.message)
}