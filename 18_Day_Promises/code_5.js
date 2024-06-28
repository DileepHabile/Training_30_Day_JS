// Fetch API
// The Fetch API provied an interface for fetching resources (including across the network).
// It will seem familiar to anyone who has used XMLHttpRequest,
// But the new API provides a more powerful and flexible feature set ,
// In this challenge we will use fetch to request url and APIS.
// In addition to that let us demonstrate use case of promises in accessing network
// resources using the fetch API

const url='https://restcountries.com/v2/all'
fetch(url)
.then(response=>response.json())// accessing the API data as JSON
.then(data=>{
    console.log(data)
})
.catch(error=>console.error(error))
//handling error if something wrong happens