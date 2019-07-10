import merge from 'lodash/merge';

import {
  RECEIVE_ALL_BEERS,
  RECEIVE_SINGLE_BEER,
  REEMOVE_BEER,
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
    case REEMOVE_BEER:
      nextState = merge({}, state)
      delete nextState[action.beer.id]
      return nextState;
    default:
      return state;
  }
};

export default beersReducer;