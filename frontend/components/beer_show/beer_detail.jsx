import React from 'react';
import { Link } from 'react-router';
import { deleteBeer} from '../../actions/beer_actions'
// import ReviewListItemContainer from './review_list_item_container';

// const reviewList = ({reviews}) => {
//   // debugger
//   return (
//   reviews.map(review => (
//     <ReviewListItemContainer
//       review={review}
//       key={review.id}
//     />
//   ))
//   )};


const BeerDetail = ({ beer, reviews }) => {
  return (
    <div>
      <ul className="beer-item">
        <li>{beer.photoUrl}</li>
        <li>{beer.name}</li>
        <li>{beer.ibu}</li>
        <li>{beer.abv}</li>
        <li>{beer.brewed_by}</li>
        <li>* * * * *</li>
        <input type="submit" onClick={() => deleteBeer(beer.id)} value="DETELE"/>
      </ul>
      <div className="reviews">
        <h3>Reviews</h3>
        {/* {reviewList(reviews)} */}
      </div>
    </div>
  )
}

export default BeerDetail;