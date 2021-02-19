
const endpoint = "http://localhost:3000/api/v1/reviews"

document.addEventListener("DOMContentLoaded", function() {
    getReviews()

    const form  = document.querySelector('#form-container')
    form.addEventListener("submit", (e) => formHandler(e))

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

function formHandler(e){
    e.preventDefault()
    const name = document.querySelector('#name').value
    const movie = parseInt(document.querySelector('#movie').value)
    const header = document.querySelector('#header').value
    const body = document.querySelector('#body').value
    postFetch(name, movie, header, body)
    //debugger
    //console.log(e)
}

//Used debugger and browser console to find and select the form values entered
//We parseInt to go from string to integer, which is what a movie_id is

function postFetch(name, movie, header, body){
    
}

//console.log("test")
//To test script tag is connecting the file to index.html