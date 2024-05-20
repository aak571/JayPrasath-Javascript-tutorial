// Very Very Very Very Very interesting, very important for Web Dev.

// try-catch block (for run-time errors)
// try {
//     // whatever ur not sure of or whatever u think can cause a potential danger or error should go here.
//     console.log('This is before the danger')
//     console.log('This is correct') // 100%
//     consolelog('Welcome to error handling') // potential error
// }
// catch (err) {
//     // whatever is ur plan to recover or handle the danger
//     console.log('OMG, it was an error')
//     console.log(err.message)
// }

// consolelog('Welcome to error handling') // potential error

try {
    // add 2 numbers
    // let a = 10, b = 20, aakash = 'Jay Prasath', aak = 'Hi'
    // console.log(aak + aakash)
    // const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
    // console.log(arrr[10]) // errr is not defined
    // console.log('Good going !!!')
    // const str = 'Aakash'
    // console.log(str[2])
    // console.log('FINAL')
    const a = 1500, b = 600
    if (b > a) {
        console.log('b is greater')
    }
    else {
        throw 'a is greater. Hope you are enjoying the JS series. Hope that the control is gone to the catch(){}'
    }

    console.log('This is after')
    // throw 'This is a throw' // intensional failing of try block or intensional error
}
catch (err) {
    console.log('ERROR')
    console.log(err)
}
finally {
    console.log('Fiiiiiiiiiiiiiiinaly')
    console.log('Fiiiiiiiiiiiiiiinaly')
    console.log('Fiiiiiiiiiiiiiiinaly')
    console.log('Fiiiiiiiiiiiiiiinaly')
    console.log('Fiiiiiiiiiiiiiiinaly')
    console.log('Fiiiiiiiiiiiiiiinaly')
    console.log('Fiiiiiiiiiiiiiiinaly')
    console.log('Fiiiiiiiiiiiiiiinaly')
}