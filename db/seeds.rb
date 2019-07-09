# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

ActiveRecord::Base.transaction do
  User.destroy_all

  demo_user = {
    'username' => 'demouser',
    'password' => 'password',
    'email' => 'demo@user.com'
  }

  User.create!(demo_user)

  beers = Beer.create(
    [{
      name: 'Fosters',
      abv: 4.0,
      ibu: 12.0,
      brewed_by: "Australians"
    },
    {
      name: 'All Day IPA',
      abv: 4.6,
      ibu: 30.0,
      brewed_by: "Founders"
    },
  ]
  )

  
end

