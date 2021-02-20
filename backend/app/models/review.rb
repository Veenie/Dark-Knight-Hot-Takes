class Review < ApplicationRecord
  belongs_to :movie
  validates :reviewer, :header, :body, presence: true
end
