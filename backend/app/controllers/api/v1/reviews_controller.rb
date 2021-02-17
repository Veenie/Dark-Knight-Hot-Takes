class Api::V1::ReviewsController < ApplicationController

    def index
        reviews = Review.all 
        render json: reviews
    end
    
    #all reviews in json format, don't need instance variables (no erb display)

    def create
        review = Review.new(review_params)
        if review.save
            render json: review
        else
            render json: {errors: review.errors.full_messages}
        end
    end        


    private

    def review_params
        params.require(:review).permit(:reviewer, :header, :body, :movie_id)
    end

    #permissable attributes, review is top level hash required




end
