
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

![Beer Show](https://github.com/ppondo/Uncorkd/blob/master/app/assets/images/brew-show.png "Beer Show")

The Brewery Show page includes an average rating display, which renders the current rating out of five.
This was acheived by calculating the average rating in the backend, passing that rating up when the frontend requests it, and updating the styling of the rating display when the rating changes.

This page also displays the total, unique, and monthly checkins for each brewery, as well as the amount of checkins the current user has created for beverages that belong to that brewery.

### Checkin Feed

![Checkin](https://github.com/ppondo/Uncorkd/blob/master/app/assets/images/checkin.png "Checkin")

Checkins display the optional rating that the user provided on review, the optional body of the review, and an image if the user chooses to include one. The images that the users include in their reviews are uploaded to and retrieved from a bucket provided by Amazon's S3 service.

The checkins also include a link to a page which displays a detailed version of a single checkin, as well as a button that removes the checkin from the app. This action updates the users stats accordingly.

### Checkin Filtering

When a particular page is shown (User Profile, Brewery Page, Beverage Page) a filter is included in the ajax request sent to the Checkin API which allows the controller to pass back the correct checkins for the page the user navigates to. This helps to keep the checkins slice of state lighter, particularly as the amount of checkins stored in the database grows.

```Ruby
class Api::CheckinsController < ApplicationController

    def index
        if params[:brewery_id]
            @checkins = Checkin.where(brewery_id: params[:brewery_id]).
                        includes(:beverage, :user)
        elsif params[:beverage_id]
            @checkins = Checkin.where(beverage_id: params[:beverage_id]).
                        includes(:user, :brewery)
        elsif params[:user_id]
            @checkins = Checkin.where(user_id: params[:user_id]).
                        includes(:beverage, :brewery)
        else
            @checkins = Checkin.all.includes(:beverage, :user, :brewery)
        end

        render :index
    end
```

## Upcoming Features

<ul>
    <li> Search! Users will be able to search the app for particular beverages, breweries, or users. </li>
    <li> Badges! Users will receive special badges for reaching milestones (number of checkins, checking in certain styles, etc.) </li>
    <li> Friends! Users will be able to add friends to interact with on the app. </li>
    <li> Profile Customization! Users will be able to change their avatar and profile header image. </li>
</ul>