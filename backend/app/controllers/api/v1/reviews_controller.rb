class Api::V1::ReviewsController < ApplicationController

    def index
        reviews = Review.all 
        render json: reviews
    end
    
    #all reviews in json format, don't need instance variables (no erb display)

    




end
