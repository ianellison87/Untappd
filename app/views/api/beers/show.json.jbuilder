json.beer do
  json.extract! @beer, :id, :name, :ibu, :abv, :brewed_by
  # json.image_url asset_path(@beer.image_url)
end