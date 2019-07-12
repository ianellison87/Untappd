class Api::ReviewsController < ApplicationController
    before_action :require_logged_in

  def index
    @reviews = Review.all
  end

  def create
    @review = current_user.reviews.new(review_params)

    if @review.save
      render :show
    else
      render json: @review, status: :unprocessable_entity
    end
  end

  private

  def review_params
    params.require(:review).permit(:rating, :body, :author_id, :beer_id)
  end
end
