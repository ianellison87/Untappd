# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

ActiveRecord::Base.transaction do
  User.destroy_all
  Beer.destroy_all

  demo_user = {
    'username' => 'demouser',
    'password' => 'password',
    'email' => 'demo@user.com'
  }

  User.create!(demo_user)

  beers = Beer.create(
    [{
      name: "Foster's Lager",
      abv: 4.0,
      ibu: 12.0,
      brewed_by: "Australians"
      
    },
    {
      name: 'All Day IPA',
      abv: 4.6,
      ibu: 30.0,
      brewed_by: "Founders Brewing Co."
    },
    {
      name: 'Torpedo Extra Ipa',
      abv: 7.2,
      ibu: 65.0,
      brewed_by: "Sierra Nevada Brewing Co."
    },
    {
      name: '#9',
      abv: 5.1,
      ibu: 20.0,
      brewed_by: "Magic Hat Brewing Company"
    },
    {
      name: 'Genesee Bock Beer',
      abv: 5.2,
      ibu: 0.0,
      brewed_by: "Genesee Brewing Company"
    },
    {
      name: 'Summer Shandy',
      abv: 4.2,
      ibu: 14.0,
      brewed_by: "Jacob Leinenkugel Brewing Company"
    },
    {
      name: 'Pabst Blue Ribbon',
      abv: 4.6,
      ibu: 10.0,
      brewed_by: "Pabst Brewing Company"
    },
    {
      name: 'White',
      abv: 5.2,
      ibu: 13.0,
      brewed_by: "Allagash Brewing Company"
    },
    {
      name: 'Anchor Steam Beer',
      abv: 4.8,
      ibu: 35.0,
      brewed_by: "Anchor Brewing Company"
    },
    {
      name: 'Bourbonic Plague',
      abv: 12.0,
      ibu: 0.0,
      brewed_by: "Cascade Brewing"
    },
    {
      name: 'Goose IPA',
      abv: 5.9,
      ibu: 55.0,
      brewed_by: "Goose Island Beer Co."
    },
    {
      name: 'Two Hearted Ale',
      abv: 7.0,
      ibu: 0.0,
      brewed_by: "Bell's Brewery"
    },
    {
      name: 'Breakfast Stout',
      abv: 8.3,
      ibu: 60.0,
      brewed_by: "Founders Brewing Co."
    },
    {
      name: 'Guinness Draught',
      abv: 4.2,
      ibu: 45.0,
      brewed_by: "Guinness"
    },
    {
      name: 'Corona Extra',
      abv: 4.5,
      ibu: 19.0,
      brewed_by: "Corona Extra"
    },
    {
      name: 'CB Caged Alpha Monkey IPA',
      abv: 6.5,
      ibu: 65.0,
      brewed_by: "CB Craft Brewers"
    },
    {
      name: 'CB Makumba Double IPA',
      abv: 9.5,
      ibu: 78.0,
      brewed_by: "CB Craft Brewers"
    },
    {
      name: 'Sculpin',
      abv: 7.0,
      ibu: 70.0,
      brewed_by: "Ballast Point Brewing Company"
    },
    {
      name: 'Citradelic: Tangerine IPA',
      abv: 6.0,
      ibu: 50.0,
      brewed_by: "New Belgium Brewing Company"
    },
    {
      name: 'Modelo Especial',
      abv: 4.5,
      ibu: 18.0,
      brewed_by: "Grupo Modelo"
    },
  ]
  )

  reviews = Review.create(
    [{
      body: "Best beer I have ever tasted",
      rating: 4,
      author_id: 1,
      beer_id: 1
    },
    {
      body: "Reminds me of my father ",
      rating: 2,
      author_id: 1,
      beer_id: 1
    },
    {
      body: "Best beer I have ever tasted",
      rating: 5,
      author_id: 1,
      beer_id: 4
    },
    {
      body: "Who am I and what am I doing with my life?",
      rating: 3.25,
      author_id: 1,
      beer_id: 6
    },
  ]
  )

  Beer.all.each_with_index do |beer, idx|
    file = EzDownload.open("https://unberreld-seed.s3-us-west-1.amazonaws.com/beer_logos/0#{idx+1}-beer.jpg")
    beer.photo.attach(io: file, filename: "0#{idx+1}-beer.jpg")
  end
  
end

