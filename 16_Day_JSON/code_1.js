// Coverting the JSON data to Objects using JSON methods parse()
//SYNTAX
//JSON.parse(json[,reviver])
// json or text , the data 
// reviver is an optional call back function
// JSON.parse(json,(key,value)=>{
//    })
const usersText=`{
    "users":[
        {
            "firstName":"Zoro",
            "lastName":"Roronoa",
            "age":20,
            "email":"zoro@gmail.com"
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

// The above data is JSON string
// Converting it into an Obejct
// So when Assigning a JSON to a const we always enclose JSON string within a literal otherwise it is considered as an Object literal

const usersObj=JSON.parse(usersText)
console.log(usersObj);