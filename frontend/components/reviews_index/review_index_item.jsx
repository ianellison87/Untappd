import React from 'react';
import { connect } from 'react-redux';

const Review = ({ review, author, beer, url }) => {

  const { rating, body, beer_id } = review;
  return (
    <div className="single-comment">
      <ul>
        <li><span className="author">{beer[beer_id]}</span></li>
        <li><span className="body-text">"{body}"</span> {/*by <span className="author">{author.username}</span>*/}</li>
        <li><img className="review-photo" src={url} /></li>
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