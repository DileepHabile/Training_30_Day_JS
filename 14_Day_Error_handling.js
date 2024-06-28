//Error Handling
// Java Script is a loosely-typed language. Some times you will get a runtime error when you 
// try to access an undefined variable or call undefined function etc

// JavaScript similar to python or Java provides an error-handling mechanism to catch runtime
// error using try-catch-finally block


// syntax
// try{
//     // code that may throw error
// }catch(err){
//     // code to be executed if an error occurs
// }finally{
//     // code to be executed regardless of an error occurs or not
// }



// try: wrap suspicious code that may throw an error in try block.The try statement allows us
// to define a block of code to be tested for errors while it is beging executed 

// catch:write code to do something in catch block when an error occurs .The catch block can have 
// parameters that will give you error information.Catch block is used to log an error or
// disply specific messages to the user 


// finally:finally block will always be execute regardless of the occurence of an error 
// The finally block can be used to complete the remaining taks or reset varibales that might have 
// changes before error occured in try block

// example

try{
    let lastName='Roronoa'
    let fullName=firstName+' '+lastName
}catch(err){
    console.log(err)
}


console.log(`Another Example`)
console.log(`In the catch block instead of error console method`)

try{
    let lastName='Roronoa'
    let fullName=firstName+' '+lastName
}catch(err){
    console.error(err)
}finally{
    console.log(`In any case this block of the code will be executed `)
}


// The catch block can take a parameter. It is common to pass e,err or error as a parameter 
// to the catch block. This parameter is an object and it has name and message keys .Let us use the
// the name and message 
// 
console.log(`using the error and message key of the catch parameter e,err,error`)
try{
    let lastName='Roronoa'
    let fullName= firstName+' '+lastName
}catch(e){
    console.log('Name of the error',e.name)
    console.log(`Error message`,e.message)
}finally{
    console.log(`In any case i will be executed`)
}



// throw
// throw: the throw statement allows us to create a custom error.We can through a string,number,boolean or object.
// Use the throw statement to throw an exception 
// When you throw an exception, expression specifies the value of the expression
// Each of the following throws an exception


//throw 'Error2' //generates an exception with a string value
// throw 42 // generates an exception with the value 42
// throw true // generates an exception with the value true
// throw new Error('required') // generates an error object with the message of Required


// Example of throw keyword in try catch block

console.log(`Throw keyword usage example`)

const throwErroExampleFun=()=>{
    let message
    let x= prompt(`Enter a number`)
    try{
        if(x==' ')throw 'empty'
        if(isNaN(x)) throw 'not a number'
        x=Number(x)
        if(x<5) throw 'too low'
        if(x>10) throw 'too high'
    }catch(err){
        console.log(err)
    }
}
throwErroExampleFun()

// we can use the throw keyword to handle the different cases on the input information given to us


//Error Types

//ReferenceError: An illegal reference has occured .A ReferenceError is thrown if we use a 
// variable that has not been declared 
//Examples: 
let firstName='Zoro'
let fullName=firstName+' '+lastName
console.log(fullName)
// Uncaught ReferenceError: lastName is not defined at <anonymous>


// SyntaxError: A Syntax error has occured

let sqaure=2x2
console.log(sqaure)
console.log('Hello, world")
// Uncaught SyntaxError: Unexcepted identifier

//TypeError: A Type error has occured 
// Uncaught TypeError: ...


// These are some of the common errors that we may face when we write a code .
// Understanding errors can help us to know what mistaked we made and it will help us to 
// debug the code fast

