json.beer do
  json.extract! @beer, :id, :name, :ibu, :abv, :brewed_by
  # json.image_url asset_path(@beer.image_url)
      if @beer.photo.attached?
      json.photoUrl url_for(@beer.photo)
    else
      json.photoUrl ""
    end
  end
# end