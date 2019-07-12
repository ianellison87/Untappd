    json.extract! beer,  :id ,:name, :ibu, :abv, :brewed_by, :average_rating
    if beer.photo.attached?
      json.photoUrl url_for(beer.photo)
    else
      json.photoUrl ""
    end
   json.reviewIds [beer.reviews]