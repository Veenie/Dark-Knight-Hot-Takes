
const endpoint = "http://localhost:3000/api/v1/reviews"

document.addEventListener("DOMContentLoaded", function() {
    getReviews()
  });

//Dom content loaded explainer  

function getReviews() {
  fetch(endpoint)
    .then(response => response.json())
    .then(r => r.forEach(element => {
        const p = `
        <div data-id=${element.id}>
        <p>${element.movie.title}</p>
        <p>${element.reviewer}</p>
        <p>${element.header}</p>
        <p>${element.body}</p>
        </div>
        <br><br>
        `;
        document.querySelector('#r-container').innerHTML += p;
    }))
}

//fetch review data from our endpoint, change data to json

//console.log("test")
//To test script tag is connecting the file to index.html