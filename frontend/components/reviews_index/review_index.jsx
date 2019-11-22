import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { Link } from 'react-router-dom'

import Review from './review_index_item';
import BeersIndexItem from './review_index_item';
// import BeerFormContainer from './beer_form_container';
// import BeerShowContainer from '../beer_show/beer_show_container'
import HeaderContainer from '../header/header_container';
import BeerDetail from '../beer_show/beer_detail';

class ReviewsIndex extends Component {
  componentDidMount() {
    this.props.requestAllBeers();
  }


  render() {
    const  allBeers  = this.props.beers;
    let reviews = [];
    let beerNames = [];
     
      for (let i = 0; i < allBeers.length; i++) {
        const beer = allBeers[i];
        beerNames.push(beer.name);
        reviews.push(beer.reviewIds[0]);
      };

    reviews = reviews.flat();
      
    return (
      
      <div className="beers-index">

        <HeaderContainer />
        {/* <BeerDetail/> */}
        <div className="top-background">
        </div>
        {/* <Route exact path="/beers/new" component={BeerFormContainer}/>  */}
        {/* <Route exact path="/beers/:beerId" component={BeerShowContainer}/>  */}
        <div className="beers-index-page">
          <div className="content-box">
            <ul>
              {reviews.map(review => <Review key={review.id} review={review} beer={beerNames}/>)}
              {/* {reviews.map(review => console.log(review.author_id, review, beerNames))} */}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
export default ReviewsIndex;