class ReviewSerializer
    include FastJsonapi::ObjectSerializer
    attributes :reviewer, :header, :body, :movie_id, :movie
    # belongs_to :movie
  end

#using serializer class to more explicily control the way data is displayed in endpoint  