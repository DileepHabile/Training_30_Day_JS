// Promise Constructor
// We can construct a promise using the Promise constuctor.We can create a new promsie
// using the keyword new followed by the word Promise and followed by  the parenthesis,
// It takes a callback function .The promise function has 2 parameters which are the resolve and reject functions

//SYNTAX
// const promsie=new Promise((resolve,reject)=>{
//     resolve{'success'}
//     reject('failure')
// })


// example of promise 


const doPromise=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        const skills=['HTML','CSS','JavaScript']
        if(skills.length>0){
            resolve(skills)
        }else{
            reject('Something wrong has happened')
        }
    },2000)
})

doPromise
.then(result=>{
    console.log(result)
})
.catch(error=>console.log(error))



// The above promise has been settled with resolve
