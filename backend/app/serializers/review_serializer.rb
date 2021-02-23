class ReviewSerializer
    include FastJsonapi::ObjectSerializer
    attributes :reviewer, :header, :body, :movie_id, :movie
    # belongs_to :movie
  end