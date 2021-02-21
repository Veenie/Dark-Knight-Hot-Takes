class Review {
    constructor(review) { 
      this.id = review.id;
      this.reviewer = review.reviewer;
      this.header = review.header;
      this.body = review.body;
      this.movie_id = review.movie_id;
      this.movie = review.movie;
      Review.all.push(this);
    }

    //this is an analogue to initialize in ruby
    //making js objects as counter parts to the ones in the backend, mirroring
    //this refers to instance being pushed thru at the time
  
    renderReview() {
    //   debugger  
      return `
        <div data-id=${this.id}>
        <p>Reviewer: <b>${this.reviewer}</b></p>
        <p>Movie: ${this.movie.title}</p>
        <h3>${this.header}</h3>
        <h4>${this.body}</h4>
        <button data-id=${this.id}>edit</button>
        </div>
        <br><br>`

    }
  }
  //making something akin to a class method, this functions to put our data on the DOM when we run our Review instances thru it
  
  Review.all = [];










//console.log("linked!")
//confirming that script tag is working