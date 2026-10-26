// //Fetch
// const url = "https://api.github.com/users/octocat";
// const data = fetch(url)
// .then((response) => {
//      console.log(response.status, response.ok);
//      return response.json();
// })
// .then((data)=> {
//     console.log(data.);
// });
// //console.log(data);


// console.log("A");
// fetch("https://api.github.com/users/octocat").then(() => console.log("B"));
// console.log("C");


// fetch('https://jsonplaceholder.typicode.com/posts/1') // order our food example
// .then(response => response.json()) // promise (getting food in package)
// .then(data => console.log(data)) // unpacking food


function getUser(username) {
    // calls the api with a fetch and get back a user

    return fetch("https://jsonplaceholder.typicode.com/users/2")
    .then((response) => {
        // error handling would go here
        return response.json();
    })
}

getUser("name")
.then((user) => console.log(user.username));




