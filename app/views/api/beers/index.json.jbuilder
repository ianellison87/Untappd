# @beers.each do |beer|
  # json.set! beer.id do
  #   json.extract! beer,  :id ,:name, :ibu, :abv, :brewed_by
  #   if beer.photo.attached?
  #     json.photoUrl url_for(beer.photo)
  #   else
  #     json.photoUrl ""
  #   end
  #   json.reviewIds []
  # end
# end

@beers.each do |beer|
  json.set! beer.id do
    json.partial! 'beer', beer: beer
    json.reviewIds [beer.reviews]
  end
end