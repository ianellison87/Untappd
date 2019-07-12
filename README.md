
# UNBARRELD

UNBARRELD is a social beer review site modeled after UNTAPPD, users can create an account so they can rate their favorite beers and share their comments on them. Users can browse brewries and beers and make checkins while drinking.

[UNBARRELD Live](https://unbarreld.herokuapp.com/)


## Features

<ul>
    <li> Backend to Frontend user authentication with password and session token encryption. </li>
    <li> Users are able to look through the list of beverages. </li>
    <li> Users can check-in a beverage they've tried, share their thoughts, and incldue a picture! </li>
    <li> Display pages beverages are updated to show the proper ratings and reviews </li>
    <li> Likes and Comments! Users are able to comment on checkins and like them. </li>
</ul>

## Technologies

### Backend
<ul>
    <li> Ruby 2.5.1 </li>
    <li> Rails 5.3.2 </li>
    <li> Postgresql </li>
</ul>

### Frontend
<ul>
    <li> React </li>
    <li> Redux </li>
    <li> JavaScript-ES6 </li>
</ul>

## Feature Highlights

### Beers Page

![Beers Show](https://github.com/ianellison87/fullstack/blob/master/app/assets/images/beers_index_screenshot.jpg "Beer Show")

The Beers Show page includes an average rating display, which renders the current rating out of five.
This was acheived by calculating the average rating in the backend, passing that rating up when the frontend requests it, and updating the styling of the rating display when the rating changes.

Also displayed on this page are stats for beers and an extensive list of beers that people have added over the ages.

### Beer show

![Beer show](https://github.com/ianellison87/fullstack/blob/master/app/assets/images/beer_show_screenshot.jpg "Beer Show")

The Beer show page has a detailed view of the beer you have requested more information on. Attached to this page are all the reviews from users that pertain to this beer in particular. 


```Ruby
class Api::BeersController < ApplicationController
  def index
    beers = Beer.all

    @beers = beers.includes(:reviews)
    render :index
  end

  def show
    @beer = Beer.find(params[:id])
  end

  def create
    @beer = Beer.create!(beer_params)

    render :show
  end

  def destroy
    @beer = Beer.find(params[:id])
    @beer.destroy

    redirect_to :back
    # render :index
  end

  private

  def beer_params
    params.require(:beer).permit(:name, :abv, :ibu, :brewed_by, :photo)
  end
end
```

## Upcoming Features

<ul>
    <li>Create a review and upload an image of you enjoying your beverage!</li>  
    <li>List of Breweries that complement the list of beers. CRUD for Breweries</li>
    <li>Checkins. You can check in what beer you are drinking at what Brewery</li>  
    <li> Search! Users will be able to search the app for particular beverages, breweries, or users. </li>
    <li> Badges! Users will receive special badges for reaching milestones (number of checkins, checking in certain styles, etc.) </li>
    <li> Friends! Users will be able to add friends to interact with on the app. </li>
    <li> Profile Customization! Users will be able to change their avatar and profile header image. </li>
</ul>