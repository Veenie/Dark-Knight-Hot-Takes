const endpoint = "http://localhost:3000/api/v1/reviews"

document.addEventListener("DOMContentLoaded", function() {
    getReviews()
    //function that render our db items on DOM

    const form  = document.querySelector('#form-container')
    form.addEventListener('submit', e => formHandler(e))
    //event listener for the submit button on our form

    const reviewContainer = document.querySelector('#r-container')
    reviewContainer.addEventListener('click', e => deleteHandler(e))
    //event listener for delete button
  });

//DOMContentLoaded event listening ensures that our JavaScript code is being executed after html loads (can't manipulate what's not there!)

function getReviews() {
  fetch(endpoint)
    .then(response => response.json())
    .then(reviews => reviews.data.forEach(review => {
      //debugger
      const newReview = new Review(review, review.attributes)
      document.querySelector('#r-container').innerHTML += newReview.renderReview()
      //debugger
        // const p = `
        // <div data-id=${review.id}>
        // <p>Reviewer: <b>${review.reviewer}</b></p>
        // <p>Movie: ${review.movie.title}</p>
        // <h3>${review.header}</h3>
        // <h4>${review.body}</h4>
        // </div>
        // <br><br>
        // `;
        // document.querySelector('#r-container').innerHTML += p;
    }))
    .catch(error => console.log(error.message));
}
//we want to get review data from our endpoint to display when user first sees page
//fetch takes resource path as an argument, returns promise with response object
//fetch gets http response, to extract the json data, we use json() method
//json is javascript object notation, a handy way to get data!
//then() takes as its argument a function that receives the response as its argument
//using forEach iteration to create new instance of Review class for every review in the array from DB (put'em through our constructor!)
//to update the dom, we target where we want it to show up (querySelector), run the renderReview() located in Review class
//catch is there for promises that are rejected, will let us know if communication with endpoint has issues

function formHandler(e){
    e.preventDefault()
    //console.log(e.target.movie.value)
    const reviewer = e.target.name.value
    const header = e.target.header.value
    const body = e.target.body.value
    const movie_id = parseInt(e.target.movie.value)
    postFetch(reviewer, header, body, movie_id)
    e.target.reset()
    //debugger
}
//for our submit listener, we want the user's entries to be paired to attributes and posted to db
//Used debugger and browser console to find and select the form values entered
//We parseInt to go from string to integer, which is what a movie_id is in schema
//once the values are paired to proper Review attributes, run through postFetch

function postFetch(reviewer, header, body, movie_id){
  const bodyData =  {reviewer, header, body, movie_id}
  return fetch(endpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'},
    body: JSON.stringify(bodyData)
  })
    .then(resp => resp.json())
    
    .then(review => {
      if(review.errors){alert(review.errors)}
      //debugger
      const reviewData = review.data
      let newerReview = new Review(reviewData, reviewData.attributes)
      document.querySelector('#r-container').innerHTML += newerReview.renderReview()
    })
    .catch(error => console.log(error.message))
}

//here we send the form data to the db to create a new review
//http verb is post, change data to json
//order is important, must line up with schema to properly create the review in db!!!
//also create a corresponding js object for front end usage (new Review)
//this way, every time form is submitted, db and frontend line up w/ counterparts
//we then use new js object to display new review on DOM so user can see it

function deleteHandler(e) {
  e.preventDefault()
  //console.log(e.target)
  const id = e.target.id;
  //console.log(id)
  const review = Review.findById(id)
  //console.log(review)
  deleteReview(review)
  //console.log(e.target.parentElement)
  e.target.parentElement.remove()
  //debugger
}

//we set event listener for a click on the DOM in the section where reviews are displayed (r-container)
//console logging event's target (e.target) displays the html of what we click on
//we are looking for delete button, only it has id, e.target.id gives us it's unique id # upon click
//use our static findById method, run the found review in deleteReview
//finally, remove from dom with parentElement.remove()

function deleteReview(review){
  //debugger
  fetch(`http://localhost:3000/api/v1/reviews/${review.id}`, {
    method: 'DELETE'
})
}

//delete fetch that utilizes our delete route

//console.log("test")
//To test script tag is connecting the file to index.html