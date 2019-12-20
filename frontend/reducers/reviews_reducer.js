import merge from 'lodash/merge';

import {
  RECEIVE_SINGLE_BEER,
  RECEIVE_REVIEW,
  RECEIVE_ALL_REVIEWS
} from '../actions/beer_actions';

const reviewsReducer = (state = {}, action) => {
  Object.freeze(state);
  console.log(action)
  switch (action.type) {
    case RECEIVE_ALL_REVIEWS:
      return merge({}, state, action.reviews);
    case RECEIVE_SINGLE_BEER:
      return merge({}, state, action.payload.reviews);
    case RECEIVE_REVIEW:
      const { review } = action;
      return merge({}, state, { [review.id]: review });
    default:
      return state;
  }
}

export default reviewsReducer;