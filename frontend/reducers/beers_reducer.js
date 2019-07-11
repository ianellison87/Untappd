import merge from 'lodash/merge';

import {
  RECEIVE_ALL_BEERS,
  RECEIVE_SINGLE_BEER,
  REMOVE_BEER,
  RECEIVE_REVIEW,
} from '../actions/beer_actions';

const beersReducer = (state = {}, action) => {
  Object.freeze(state);
  let nextState = {}
  let beer;

  switch(action.type) {
    case RECEIVE_ALL_BEERS:
      return merge({}, state, action.beers);
    case RECEIVE_SINGLE_BEER:
      beer = action.payload.beer;
    return merge({}, state, {[beer.id]: beer})
    case REMOVE_BEER:
      nextState = merge({}, state)
      delete nextState[action.beerId]
      return nextState;
    case RECEIVE_REVIEW:
      const { review, average_rating } = action;
      const newState = merge({}, state);
      newState[review.bench_id].reviewIds.push(review.id);
      newState[review.bench_id].average_rating = average_rating;
      return newState;
    default:
      return state;
  }
};

export default beersReducer;