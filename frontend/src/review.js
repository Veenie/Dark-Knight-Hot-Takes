class Review {
    constructor(review, attr) { 
      this.id = review.id;
      this.reviewer = attr.reviewer;
      this.header = attr.header;
      this.body = attr.body;
      this.movie = attr.movie;
      Review.all.push(this);
    }

    //this is an analogue to initialize in ruby
    //making js objects as counter parts to the ones in the backend, mirroring
    //this refers to instance being pushed thru at the time
    //attr represents the second argument (need two because fast json)
    //use push array method to place into our empty array collecting all instances of class

    static findById(id) {
        return this.all.find(r => r.id === id);
      }
    
    //static method, similar to class method in ruby
    //because we push every instance into Review.all, we can serach it!
    //in this case we search for instance with an id number that matches  
  
    renderReview() {
    //   debugger 
      return `
        <div data-id=${this.id}>
        <p>Reviewer: <b>${this.reviewer}</b></p>
        <p>Movie: <b>${this.movie.title}</b></p>
        <h3>${this.header}</h3>
        <h4>${this.body}</h4>
        <button id="${this.id}" class="button">delete</button>
        </div>
        <br><br>`
    }
 //this function exists to put our data on the DOM in GET and POST (we run Review instances thru it)

  }
 
  Review.all = [];

  //container for our instances

//console.log("linked!")
//confirming that script tag is working