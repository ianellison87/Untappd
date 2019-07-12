# json.beer do
#   json.extract! @beer, :id, :name, :ibu, :abv, :brewed_by
#   # json.image_url asset_path(@beer.image_url)
#       if @beer.photo.attached?
#       json.photoUrl url_for(@beer.photo)
#     else
#       json.photoUrl ""
#     end
#   end
# # json.review do
# #   json.set! beer.review.id

json.beer do
  json.partial! '/api/beers/beer', beer: @beer
  json.reviewIds @beer.reviews.pluck(:id)
end

@beer.reviews.includes(:author).each do |review|
  json.reviews do
    json.set! review.id do
      json.partial! 'api/reviews/review', review: review
    end
  end

  json.authors do
    json.set! review.author.id do
      json.extract! review.author, :id, :username
    end
  end
end
