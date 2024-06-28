// Using a Filter Array with JSON.stringify

// Now, let us use the replacer as a filter .
// The user object has long list of keys but we are intereste only 
// in few of them. We put the keys we want ot keep in array as shown 
// in the example and use it at the place of the replacer

//example

const user={
firstName: 'Asabeneh',
lastName: 'Yetayeh',
country: 'Finland',
city: 'Helsinki',
email: 'alex@alex.com',
skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Python'],
age: 250,
isLoggedIn: false,
points: 30
}


const txt=JSON.stringify(user,['firstName','lastName','country','city','age'],4)
console.log(txt)


// the output JSON string  will have only the given keys in the replacer i.e the filter array
