
const endpoint = "http://localhost:3000/api/v1/reviews"

document.addEventListener("DOMContentLoaded", function() {
    fetch(endpoint)
    .then(response => response.json())
    .then(r => {
        console.log(r);
        })
  });

//Dom content loaded explainer  

//console.log("test")
//To test script tag is connecting the file to index.html