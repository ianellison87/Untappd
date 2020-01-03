import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { Link } from 'react-router-dom'
import Review from './review_index_item';
import BeersIndexItem from './review_index_item';
import HeaderContainer from '../header/header_container';
import BeerDetail from '../beer_show/beer_detail';

class ReviewsIndex extends Component {
  constructor(props) {
    super(props);

    this.state = {
      reviews: this.props.reviews
    }

  }

  componentDidMount() {
    this.props.requestAllBeers();
    this.props.requestAllReviews();
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps && nextProps.reviews) {
      this.setState({reviews: nextProps.reviews})
    }
  }


  render() {
    const  allBeers  = this.props.beers;

    let beerNames = [];
  
      for (let i = 0; i < allBeers.length; i++) {
        const beer = allBeers[i];
        beerNames.push(beer.name);
    
      };

    let reviews = this.state.reviews
    
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
              {reviews.map(review => <Review key={review.id} review={review} beer={beerNames} url={review.photoUrl}/>)}
              {/* {reviews.map(review => console.log(review.author_id, review, beerNames))} */}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
export default ReviewsIndex;