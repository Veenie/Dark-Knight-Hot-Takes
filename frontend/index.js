
const endpoint = "http://localhost:3000/api/v1/reviews"

document.addEventListener("DOMContentLoaded", function() {
    getReviews()
  });

//Dom content loaded explainer  

function getReviews() {
  fetch(endpoint)
    .then(response => response.json())
    .then(r => r.forEach(element => {
        const p = `<h3>${element.reviewer}</h3>`;
        document.querySelector('body').innerHTML += p;
    }))
}

//fetch review data from our endpoint, change data to json

//console.log("test")
//To test script tag is connecting the file to index.html