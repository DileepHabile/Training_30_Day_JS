// Converting Object to JSON
// When we want to change the object to JSON we use JSON.stringify(). 
// The stringify method takes one required parameter and 2 optional parameters


//SYNTAX 
//JSON.stringigy(obj,replacer,space)


// The replacer is an optional callback function is used a filter and the space is
// an indentations.
// If we do not want to filter out any of the keys from the object we can just pass undefined

// Let us convert the following object to a string 
// Let us keep all the keys and let us have the indentation 4 space indentation

const users={
    Alex: {
        email: 'alex@alex.com',
        skills: ['HTML', 'CSS', 'JavaScript'],
        age: 20,
        isLoggedIn: false,
        points: 30
      },
      Asab: {
        email: 'asab@asab.com',
        skills: [
          'HTML',
          'CSS',
          'JavaScript',
          'Redux',
          'MongoDB',
          'Express',
          'React',
          'Node'
        ],
        age: 25,
        isLoggedIn: false,
        points: 50
      },
      Brook: {
        email: 'daniel@daniel.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
        age: 30,
        isLoggedIn: true,
        points: 50
      },
      Daniel: {
        email: 'daniel@alex.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
        age: 20,
        isLoggedIn: false,
        points: 40
      },
      John: {
        email: 'john@john.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
        age: 20,
        isLoggedIn: true,
        points: 50
      },
      Thomas: {
        email: 'thomas@thomas.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'React'],
        age: 20,
        isLoggedIn: false,
        points: 40
      },
      Paul: {
        email: 'paul@paul.com',
        skills: [
          'HTML',
          'CSS',
          'JavaScript',
          'MongoDB',
          'Express',
          'React',
          'Node'
        ],
        age: 20,
        isLoggedIn: false,
        points: 40
      }
}

const txt=JSON.stringify(users,undefined,4)
console.log(txt);