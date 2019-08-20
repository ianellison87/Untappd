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
    'username' => 'ianellison87',
    'password' => 'password',
    'email' => 'ianellison87@yahoo.com'
  }

  User.create!(demo_user)

  users = User.create(
    [{
      username: 'bobby632',
      password: 'password',
      email: 'bobby356@gmail.com'
    },
    {
      username: 'someguy3',
      password: 'password',
      email: 'justadude@gmail.com'
    },
    {
      username: 'andyMinucos',
      password: 'password',
      email: 'ilovefosters@gmail.com'
    },
    {
      username: 'beerGuRu',
      password: 'password',
      email: 'brews@gmail.com'
    },
    {
      username: 'mclovin',
      password: 'password',
      email: 'whateverdude56@gmail.com'
    },
  ]
  )

  beers = Beer.create(
    [{
      name: "Foster's Lager",
      abv: 4.0,
      ibu: 12.0,
      brewed_by: "Australians",
      description: "Note: The ABV for this beer varies between 4% ABV in Europe, 4.9% ABV in Australia, and 5% in the US.

First brewed by William and Ralph Foster in Melbourne in 1888.

With its Australian heritage, Foster's truly embodies the Australian ‘no worries’ attitude to life. It is an easy-drinking lager that is perfectly balanced with moderate vanilla tasting notes and no hard edges or bitter after taste for perfect refreshment."
    },
    {
      name: 'All Day IPA',
      abv: 4.6,
      ibu: 30.0,
      brewed_by: "Founders Brewing Co.",
      description: "Satisfies your tastes while keeping your senses sharp. Brewed with a complex array of ingredients. Balanced for optimal aromatics and a clean finish."
    },
    {
      name: 'Torpedo Extra Ipa',
      abv: 7.2,
      ibu: 65.0,
      brewed_by: "Sierra Nevada Brewing Co.",
      description: "Sierra Nevada Torpedo Ale is a big American IPA; bold, assertive and full of flavor and aromas highlighting the complex citrus, pine and herbal character of whole-cone American hops. Our obsession with harnessing huge hop flavor led to the development of what we call the hop torpedo, a revolutionary method of dry-hopping designed, built, and debuted here at the brewery. Our torpedo is a sleek, stainless-steel piece of hardware that delivers more pure hop aroma than any method of dry-hopping we’ve ever seen."
    },
    {
      name: '#9',
      abv: 5.1,
      ibu: 20.0,
      brewed_by: "Magic Hat Brewing Company",
      description: "\"A Beer Cloaked in Secrecy\"

An ale whose mysterious and unusual palate will swirl across your tongue and ask more than it answers. A sort of dry, crisp, refreshing, not-quite pale ale. #9 is really impossible to describe because there's never been anything else quite like it.

Our secret ingredient introduces a most unusual aroma profile which is balanced with a residual sweetness. Our gateway beer, # 9 is very accessible, appealing to a broad range of pallets.

Malts:
Pale & Crystal

Hops:
Apollo & Cascade "
    },
    {
      name: 'Genesee Bock Beer',
      abv: 5.2,
      ibu: 0.0,
      brewed_by: "Genesee Brewing Company",
      description: "Our take on the 16th century German legend has turned out to be a legend in its own right. For every spring since 1951, our brewery has carefully crafted and lagered Genesee Bock Beer. The result is an exceptionally hearty, full-flavored beer with a slight malty finish—and a perfect way to celebrate the snow melt."
    },
    {
      name: 'Summer Shandy',
      abv: 4.2,
      ibu: 14.0,
      brewed_by: "Jacob Leinenkugel Brewing Company",
      description: "A shandy is beer mixed with a little something extra like soda, juice or ginger ale. Leinenkugel’s® Summer Shandy® is a traditional wheat beer with refreshing natural lemonade flavor that makes it perfect for the sun-splashed summer months. For a fun and fresh food pairing, try it with lighter, brighter foods like shrimp quesadillas, pan-seared scallops with lemon vinaigrette, or lemon chicken with pasta."
    },
    {
      name: 'Pabst Blue Ribbon',
      abv: 4.6,
      ibu: 10.0,
      brewed_by: "Pabst Brewing Company",
      description: "This is the original Pabst Blue Ribbon Beer. Nature's choicest products provide its prized flavor. Only the finest of hops and grains are used. Selected as America's Best in 1893."
    },
    {
      name: 'White',
      abv: 5.2,
      ibu: 13.0,
      brewed_by: "Allagash Brewing Company",
      description: "Allagash White features a refreshing balance of citrus and spice. Wheat, coriander, and Curaçao orange peel round out the flavor of this pale straw-colored, hazy beer."
    },
    {
      name: 'Anchor Steam Beer',
      abv: 4.8,
      ibu: 35.0,
      brewed_by: "Anchor Brewing Company",
      description: 'San Francisco\'s famous Anchor Steam®, the classic of American brewing tradition since 1896, is virtually handmade, with an exceptional respect for the ancient art of brewing. The deep amber color, thick creamy head, and rich flavor all testify to our traditional brewing methods. Anchor Steam is unique, for our brewing process has evolved over many decades and is like no other in the world. Anchor Steam derives its unusual name from the 19th century when "steam" seems to have been a nickname for beer brewed on the West Coast of America under primitive conditions and without ice. The brewing methods of those days are a mystery and, although there are many theories, no one can say with certainty why the word "steam" came to be associated with beer. For many decades Anchor alone has used this quaint name for its unique beer. In modern times, "Steam" has become a trademark of Anchor Brewing.'
    },
    {
      name: 'Bourbonic Plague',
      abv: 12.0,
      ibu: 0.0,
      brewed_by: "Cascade Brewing",
      description: "This blend of strong dark porters was aged in oak, wine and Bourbon barrels, then blended with a dark porter that had been brewed with vanilla beans and cinnamon. The blend was then aged an additional 14 months on dates."
    },
    {
      name: 'Goose IPA',
      abv: 5.9,
      ibu: 55.0,
      brewed_by: "Goose Island Beer Co.",
      description: "Goose Island’s flagship IPA is a six-time medal winner at the Great American Beer Festival. We’ve taken the traditional English Style and created our own fuller flavored IPA with bright citrus aromas and a bold hop finish. With hoppy, bold, and smooth flavor, Goose IPA is the perfect beer for hopheads and discovery drinkers alike."
    },
    {
      name: 'Two Hearted Ale',
      abv: 7.0,
      ibu: 0.0,
      brewed_by: "Bell's Brewery",
      description: "Brewed with 100% Centennial hops from the Pacific Northwest and named after the Two Hearted River in Michigan’s Upper Peninsula, this IPA is bursting with hop aromas ranging from pine to grapefruit from massive hop additions in both the kettle and the fermenter.

Perfectly balanced with a malt backbone and combined with the signature fruity aromas of Bell's house yeast, this beer is remarkably drinkable and well suited for adventures everywhere."
    },
    {
      name: 'Breakfast Stout',
      abv: 8.3,
      ibu: 60.0,
      brewed_by: "Founders Brewing Co.",
      description: "The coffee lover’s consummate beer. Brewed with an abundance of flaked oats, bitter and imported chocolates, and Sumatra and Kona coffee, this stout has an intense fresh-roasted java nose topped with a frothy, cinnamon-colored head that goes forever."
    },
    {
      name: 'Guinness Draught',
      abv: 4.2,
      ibu: 45.0,
      brewed_by: "Guinness",
      description: "Swirling clouds tumble as the storm begins to calm. Settle. Breathe in the moment, then break through the smooth, light head to the bittersweet reward.

Unmistakeably GUINNESS, from the first velvet sip to the last, lingering drop. And every deep-dark satisfying mouthful in between.

Pure beauty. Pure GUINNESS.

Guinness Draught is sold in kegs, widget cans, and bottles. The ABV varies from 4.1 to 4.3%.

Guinness Extra Cold is the exact same beer only served through a super cooler at 3.5 °C"
    },
    {
      name: 'Corona Extra',
      abv: 4.5,
      ibu: 19.0,
      brewed_by: "Corona Extra",
      description: "Outside Mexico, Corona is often served with a wedge of citrus fruit - usually lime, occasionally lemon - inserted into the neck of the bottle. Within Mexico, especially in the south, Corona served with lime is not uncommon, but is not considered mandatory.

Includes Coronita, Coronita Extra, Corona Mega and Corona Familiar.

If you are having either a Michelada or a Corona-rita, please do not create a unique new beer since beer cocktails are not allowed."
    },
    {
      name: 'CB Caged Alpha Monkey IPA',
      abv: 6.5,
      ibu: 65.0,
      brewed_by: "CB Craft Brewers",
      description: ""
    },
    {
      name: 'CB Makumba Double IPA',
      abv: 9.5,
      ibu: 78.0,
      brewed_by: "CB Craft Brewers",
      description: "A bonifide hop-head’s delight. This is a beer truly bursting at the seams with juicy, tropical hop presence. Beginning with pineapple, mango and guava the ride continues into a pleasant citrus finish. The conjunction of malts add an assertive tangy counterbalance to this hop parade to remind you this is a real brazen beast. "
    },
    {
      name: 'Sculpin',
      abv: 7.0,
      ibu: 70.0,
      brewed_by: "Ballast Point Brewing Company",
      description: "The Sculpin IPA is a testament to our humble beginnings as Home Brew Mart. Founded in 1992, the Mart continues to be a catalyst for the San Diego brewing scene, setting the trend for handcrafted ales. Inspired by our customers, employees and brewers, the Sculpin IPA is bright with aromas of apricot, peach, mango and lemon. Its lighter body also brings out the crispness of the hops. This delicious Ballast Point Ale took a Bronze Medal at the 2007 Great American Beer Festival in the Pro Am category. The Sculpin fish has poisonous spikes on its fins that can give a strong sting. Ironically, the meat from a Sculpin is considered some of the most tasty. Something that has a sting but tastes great, sounds like a Ballast Point India Pale Ale."
    },
    {
      name: 'Citradelic: Tangerine IPA',
      abv: 6.0,
      ibu: 50.0,
      brewed_by: "New Belgium Brewing Company",
      description: "Tune in and hop out with New Belgium Citradelic. Set adrift on a kaleidoscopic wave of hoppiness brought to you by a mystical marriage of Citra hops and tangerine peel, which elevates each sip onto a plane of pure tropical, fruity pleasure.
Citradelic’s namesake hop and fruit combine to jam with visions of additional hops like citrusy Mandarina Bavaria, tropical Azzaca, and fruity Galaxy for a colorful explosion that’s grounded by just a touch of malty sweetness. Bored by the status quo? Expand your palate with a pour of Citradelic.

Hops - Nugget, Crystal, Centennial, Azzaca, Cascade, Citra, Chinook, Galaxy, Mandarina Bavaria, Simcoe.

Matls - Pale, Caramel 120. 

Tangerine infused orange peel."
    },
    {
      name: 'Modelo Especial',
      abv: 4.5,
      ibu: 18.0,
      brewed_by: "Grupo Modelo",
      description: "Modelo Especial, a pilsener type beer, was introduced to the market in 1966. Today it is sold in glass bottles as well as cans, which are having an increasing demand due to consumer preferences, making Modelo Especial the leader in the can segment in Mexico."
    },
  ]
  )

  reviews = Review.create(
    [{
      body: "Best beer I have ever tasted",
      rating: 4,
      author_id: 1,
      beer_id: 1,
    },
    {
      body: "Too strong for my taste, I prefer a nice Natty Ice",
      rating: 2,
      author_id: 1,
      beer_id: 9,
    },
    {
      body: "Best beer I have ever tasted",
      rating: 5,
      author_id: 1,
      beer_id: 8,
    },
    {
      body: "Unpopular Opinion: A04 was fun",
      rating: 3.75,
      author_id: 1,
      beer_id: 8,
    },
    {
      body: "I heard they recently added more hops!",
      rating: 3.5,
      author_id: 1,
      beer_id: 5,
    },
    {
      body: "I think im losing my mind",
      rating: 2.0,
      author_id: 1,
      beer_id: 9,
    },
    {
      body: "This is teh perfect summer beer... either that or I dont know what im talking about",
      rating: 4.25,
      author_id: 1,
      beer_id: 10,
    },
    {
      body: "First round is on me",
      rating: 3.25,
      author_id: 1,
      beer_id: 12,
    },
    {
      body: "I have to write real things in this review because its near the top",
      rating: 2.25,
      author_id: 1,
      beer_id: 2,
    },
    {
      body: "Who am I and what am I doing with my life?",
      rating: 1.5,
      author_id: 1,
      beer_id: 6,
    },
    {
      body: "Tastes like sadness",
      rating: 1.25,
      author_id: 1,
      beer_id: 5,
    },
    {
      body: "Great flavors cant wait to try more like it, this brewery is AWESOME!",
      rating: 3.50,
      author_id: 1,
      beer_id: 2,
    },
    {
      body: "Who am I and what am I doing with my life?",
      rating: 2.75,
      author_id: 1,
      beer_id: 3,
    },
    {
      body: "Wow, blown away by the subtle notes of home!",
      rating: 5,
      author_id: 1,
      beer_id: 1,
    },
    {
      body: "I can't get enough of this stuff!",
      rating: 3,
      author_id: 1,
      beer_id: 1,
    },
  ]
  )

  Beer.all.each_with_index do |beer, idx|
    file = EzDownload.open("https://unberreld-seed.s3-us-west-1.amazonaws.com/beer_logos/0#{idx+1}-beer.jpg")
    beer.photo.attach(io: file, filename: "0#{idx+1}-beer.jpg")
  end
  
  Review.all.each_with_index do |review, idx|
    file = EzDownload.open("https://unberreld-seed.s3-us-west-1.amazonaws.com/reviews/0#{idx+1}-photo.jpeg")
    review.photo.attach(io: file, filename: "0#{idx+1}-photo.jpeg")
  end
end

