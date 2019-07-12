import React from 'react';
import { connect } from 'react-redux';

const Review = ({ review, author }) => {
  const { rating, body, photoUrl } = review;
  return (
    <div>
      <ul>
        <li><p1 className="body-text">"{body}"</p1> - by <p2 className="author">{author.username}</p2></li>
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