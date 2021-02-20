class Review {
    constructor(review) { 
      this.id = review.id;
      this.reviewer = review.reviewer;
      this.header = review.header;
      this.body = review.body;
      this.movie = review.movie;
      Review.all.push(this);
    }
  
    renderReview() {
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
  
  Review.all = [];










//console.log("linked!")
//confirming that script tag is working