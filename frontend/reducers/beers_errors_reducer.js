import {
  RECEIVE_BEERS_ERRORS
} from '../actions/beer_actions';

const beersErrorsReducer = (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_BEERS_ERRORS:
      return [...action.errors];
    default:
      return state;
  }
};

export default beersErrorsReducer;