//UNLIMITED NUMBER OF ARGUMENTS  in an arrow function
// Arrow functions do not have the function scoped arguments object. To implement a function
// which takes unlimited number of arguments in an arrow function we use spread operator 
// followed by any parameter name
// Anything we passed as an argument in the function can be accessed as arrray in the arrow function
// let us see an example

const sumAllNums=(...args)=>{
    let sum=0;
    for(const element of args)
        {
            sum+=element
        }
        return sum
}
console.log(sumAllNums(1,2,3,4));
console.log(sumAllNums(10,20,13,40,10));
console.log(sumAllNums(15,20,30,25,10,33,40));

//ANONYMOUS FUNCTION
//Anonymous functions are functions without name
//Example

console.log(`Anonymous Function`)
const anonymous=function(){
    console.log(`I am an anonymous function and my value is stored in anonymous function`);
}


// Expression  Function
// Expression functions are anonymous functions.After we create a function without a name and we 
// assign it to a variable.To return a value from the function we should call the variable 
// Look at the example below

// function expression
console.log(`Function Expression`)
const square=function(n){
    return n*n;
}

console.log(square(2));


// Self Invoking Functions
// Self Invoking functions are Anonymous functions which do not need to be called to return a value 
console.log(`Self Invoking Function`);

(function(n){
    console.log(n*n)
})(2)  
// but instead of printing if we want to return and store the data ,we do as given below

let squaredNum=(function(n){
    return n*n
})(10)
console.log(squaredNum)


// Arrow function 
// Arrow function is an alternative to write a function.However function declaration and
// Arrow function have some minor differences

// Arrow function uses arrow instead if the keyword function to declare a function
// Let us see bothe function declaration and arrow declaration

console.log(`Function`)
function squareNum(n){
    return n*n
}

console.log(squareNum(2))// 4

console.log(`Arrow function`)
const squareArrow=(n)=>{
    return n*n
}

console.log(squareArrow(2))//4

console.log(`Explict Arrow function`)
// If we have only one line in the code block, it can be written as follows,
// explicit return
const squareArrowExplicit=(n)=>n*n;
// 4
console.log(squareArrowExplicit(4));
//examples of arrow functions

const changeToUpperCase=arr=>{
    const newArr=[]
    for(const element of arr)
        {
            newArr.push(element.toUpperCase())
        }
        return newArr
}

const countries=['Finland', 'Sweden', 'Norway', 'Denmark', 'Iceland']
console.log(changeToUpperCase(countries))


// Another example of Arrow Function
console.log('Arrow Function Example')
const fullName=(first_name,last_name)=>{
      return `${first_name} ${last_name}`
}
console.log(fullName('Zoro','Roronoa'));

// The function has only the return statment then it can be written explicitly as shown below

const fullNameExplicit=(first_name,last_name)=>`${first_name} ${last_name}`;
console.log(fullNameExplicit('Monkey D','Luffy'));


// Function with default Parameters 

// Daily Exercise of the Functions