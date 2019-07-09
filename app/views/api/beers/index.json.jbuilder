@beers.each do |beer|
  json.set! beer.id do
    json.extract! beer,  :id ,:name, :ibu, :abv, :brewed_by
  end
end