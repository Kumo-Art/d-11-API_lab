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


console.log("A");
fetch("https://api.github.com/users/octocat").then(() => console.log("B"));
console.log("C");