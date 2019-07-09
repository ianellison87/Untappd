@beers.each do |beer|
  json.set! beer.id do
    json.extract! beer,  :id ,:name, :ibu, :abv, :brewed_by
    if beer.photo.attached?
      json.photoUrl url_for(beer.photo)
    else
      json.photoUrl ""
    end
  end
end