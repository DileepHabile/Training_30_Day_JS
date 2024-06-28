// Example where the Promise has been rejected 


const doPromise=new Promise((resolve,reject)=>{
    setTimeout(()=>
        {
            const skills=['HTML','CSS','JS']
            if(skills.includes('Node')){
                resolve('Fullstack developer')
            }else{
                reject('somethig wrong has happened')
            }
        },2000)
})

doPromise
.then(result=>{
    console.log(result)
})
.catch(error=>console.error(error))