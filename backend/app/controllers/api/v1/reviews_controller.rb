class Api::V1::ReviewsController < ApplicationController

    def index
        reviews = Review.all 
        render json: ReviewSerializer.new(reviews)
    end
    
    #all reviews rendered in json format for fetching, don't need instance variables (no erb display)
    #reviews variable is all instances of Review class
    #then we use them as variable for our fast json serializer, will further determine how data is displayed as endpoint

    def create
        #binding.pry
        review = Review.new(review_params)       
        if review.save
            render json: ReviewSerializer.new(review)
        else
            render json: {errors: review.errors.full_messages}
        end
    end

    #create new instance of Review class and render based on what's entered on frontend or display error if attribute is missing based on strong params
    #using byebug/pry to check the review_params, make sure our data is making it from the front to back
    #if our review is not created/saved, then we create a error message that can be called on as .errors (line 77, index.js)

    def destroy
        @review = Review.find_by(id: params[:id]).destroy
        render json: @review
    end

    #now we have an endpoint for deleting reviews utilizing the id number in the url routing
    #will find and delete review based on the id number in the url sent!


    private

    def review_params
        params.require(:review).permit(:reviewer, :header, :body, :movie_id)
    end

    #review is top level hash required, followed by permissable attributes to be present in new instances




end