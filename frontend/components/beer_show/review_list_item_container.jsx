import React from 'react';
import { connect } from 'react-redux';

const Review = ({ review, author }) => {
  const { rating, body, img_url } = review;
  return (
    <div>
      <ul>
        <li>{body} - by {author.username}</li>
        <li><img src={img_url} /></li>
        <li>Rating: {rating}</li>
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