// Using a reviver function with JSON.parse()
// To user the reviver function as a formatter, we put the keys we want to format
// Let us say we are interested to format the firstName and lastName of the JSON data

// Example program

const usersText=`{
  "users":[
    {
        "firstName":"Asabeneh",
        "lastName":"Yetayeh",
        "age":250,
        "email":"asab@asb.com"
    },
    {
        "firstName":"Alex",
        "lastName":"James",
        "age":25,
        "email":"alex@alex.com"
    },
    {
    "firstName":"Lidiya",
    "lastName":"Tekle",
    "age":28,
    "email":"lidiya@lidiya.com"
    }
  ]
}`


// Formatting the key firstName and lastName as per our requirment

const userObj=JSON.parse(usersText,(key,value)=>{
    let newValue=
    typeof value=='string' && key!='email'? value.toUpperCase():value
    return newValue
})



// The reviver function is invokde in the JSON.parse() only when the JSON.parse() encounters
// a key value pair in the JSON string if the reviver function is provided
// The reviver function takes 2 arguments key ,value -> the current key that is being processed and
// and its corresponding value 
// The value returned by the reviver function alters the value of the current key that is being under process
console.log(userObj);



// The JSON.parse) is very handy to sue . you do not have to pas optional parameters,
// you can just use it with the required parameter and still you can achieve a lot
