import * as APIUtil from '../util/beers_api_util';

export const RECEIVE_ALL_BEERS = 'RECEIVE_ALL_BEERS';
export const RECEIVE_SINGLE_BEER = 'RECEIVE_SINGLE_BEER';
export const REEMOVE_BEER = 'REMOVE__BEER';
export const CREATE_BEER = 'CREATE_BEER';
export const RECEIVE_BEERS_ERRORS = 'RECEIVE_BEERS_ERRORS';

export const requestAllBeers = () => dispatch => {
  return APIUtil.fetchAllBeers()
    .then(beers => dispatch(receiveAllBeers(beers)))
};

export const requestSingleBeer = (id) => dispatch => {
  return APIUtil.fetchSingleBeer(id)
    .then(payload => dispatch(receiveSingleBeer(payload)))
};

export const createBeer = beer => dispatch => {
  return APIUtil.createBeer(beer)
    .then(beer => {dispatch(receiveSingleBeer(beer));
    return pokemon;
  }).fail(err => dispatch(receiveBeerErrors(err.responseJSON)))
};

export const receiveAllBeers = beers => ({
  type: RECEIVE_ALL_BEERS,
  beers
});

export const receiveSingleBeer = payload => ({
  type: RECEIVE_SINGLE_BEER,
  payload
});

export const receiveBeerErrors = errors => ({
  type: CREATE_BEER,
  errors
})