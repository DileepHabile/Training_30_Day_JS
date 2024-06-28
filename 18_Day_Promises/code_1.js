// From the following code blocks you will notice , the difference between callback and promises

// call back let us see a callback function which can take two parameters.
// The first parameter is err and the second is result.
// If the err parameter is false , if the err parameter is false, there will not be error 
// otherwise it will return an error 


const doSomething= callback=>{
    setTimeout(()=>{
        const skills=['HTML','CSS','JS']
        callback(false, skills)
    },2000)
}

// dosomething is a function that takes a 'callback' function as an argument
// Inside 'doSomething' there's a 'setTimeout' function  which simulates an asynchronous operation
// that takes 2 seconds to complete
// After doSomething calls the callback function with 2 arguments an error message (`It did not go well`) 
// and an array of sills ()
const callback=(err,result)=>{
    if(err){
        return console.log(err)
    }
    return console.log(result)
}
doSomething(callback)


// Asynchronous execution: JavaScript executes 'doSomething' asynchronously using 'setTimeout'.
// This mimics scenarios like fetching data from a server or handling delayed operations


// Using callbacks allows handling asynchronous operations in JavaScript without blocking
// the main thread
// The callback function serves as a way to handle the result of the asynchronous operations
// once it completes
// The callback pattern also facilitates error handling