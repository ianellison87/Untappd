import React from 'react';
import { Link } from 'react-router';
import { deleteBeer} from '../../actions/beer_actions'
import ReviewListItemContainer from './review_list_item_container';

const reviewList = (reviews) => {
  return (
  reviews.map(review => (
    <div className="single-comment">
    
      <ReviewListItemContainer
        review={review}
        key={review.id}
      />
    </div >

  ))
)};


const BeerDetail = ({ beer, reviews }) => {
  return (
    // <div>
      /* <ul className="beer-item">
        <li><img className="beer-logo" src={beer.photoUrl} alt="" /></li>
        <li>{beer.name}</li>
        <li>{beer.ibu}</li>
        <li>{beer.abv}</li>
        <li>{beer.brewed_by}</li>
        <li>* * * * *</li>
        {/* <input type="submit" onClick={() => deleteBeer(beer.id)} value="DELETE"/> */
      // </ul> */}
      <div className="reviews">
          {reviewList(reviews)}
      </div>
    /* {reviews && reviews.map(review => <li>{review.body}</li>)} */
    // </div>
  )
}

export default BeerDetail;