import React from 'react';
import { connect } from 'react-redux';

const Review = ({ review, author }) => {
  const { rating, body, photoUrl } = review;
  return (
    <div>
      <ul>
    {console.log(author)}
        <li><span className="body-text">"{body}"</span> - by <span className="author">{author.username}{users}</span></li>
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