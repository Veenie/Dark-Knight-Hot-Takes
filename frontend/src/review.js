class Review {
    constructor(review) { 
      this.id = review.id;
      this.reviewer = review.reviewer;
      this.header = review.header;
      this.body = review.body;
      this.movie_id = review.movie_id;
      Review.all.push(this);
    }

    //this is an analogue to initialize in ruby
    //making js objects as counter parts to the ones in the backend, mirroring
    //this refers to instance being pushed thru at the time

    static findById(id) {
        return this.all.find(r => r.id === id);
      }
    
    //static method, similar to class method in ruby
    //because we push every instance into Review.all, we can serach it!
    //in this case we search for instance with an id number that matches  
  
    renderReview() {
    //   debugger 
    //if (this.movie.title == nil) {
        //const movie = Movie.findById(this.movie_id)
    //}
      return `
        <div data-id=${this.id}>
        <p>Reviewer: <b>${this.reviewer}</b></p>
         <p>Movie: ${this.movie_id}</p>
        <h3>${this.header}</h3>
        <h4>${this.body}</h4>
        <button id="${this.id}" class="button">delete</button>
        </div>
        <br><br>`
    }
 //this function exists to put our data on the DOM when we run Review instances thru it

  }
 
  Review.all = [];

  //container for our instances
  //due to hoisting, it's fine to create it at the bottom
  //reads Review.all before hitting interior of class

//console.log("linked!")
//confirming that script tag is working