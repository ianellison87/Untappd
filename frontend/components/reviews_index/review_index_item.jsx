import React from 'react';
import { connect } from 'react-redux';

const Review = ({ review, author, beer }) => {
  // console.log(review)
  const { rating, body, photoUrl, beer_id } = review;
  return (
    <div>
      <ul>
        <li>{beer[beer_id]}</li>
        <li><span className="body-text">"{body}"</span> - by <span className="author" >{author.username}</span></li>
        <li><img className="review-photo" src={photoUrl} /></li>
        <li className="rating-text">Rating: {rating}</li>
      </ul>
    </div>
  );
};

const mapStateToProps = ({ entities: { users } }, { review }) => {
  return {
    author: users[review.author_id]
  };
};

export default connect(mapStateToProps)(Review);