const doSomething= callback=>{
    setTimeout(()=>{
        const skills=['HTML','CSS','JavaScript']
        callback(false,skills)
    },2000)
}

doSomething((error,result)=>{
    if(error){
         return console.log(error)
    }
    return console.log(result)
})


// this code is almost similar to handling the asynchronous function in JavaScript 
// the setTimout function acts as a Asynchronous function in JS 
// the callback function handles the Asycnhronous function effieciently


