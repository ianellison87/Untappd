import * as APIUtil from '../util/beers_api_util';

export const RECEIVE_ALL_BEERS = 'RECEIVE_ALL_BEERS';
export const RECEIVE_SINGLE_BEER = 'RECEIVE_SINGLE_BEER';
export const REMOVE_BEER = 'REMOVE__BEER';
export const CREATE_BEER = 'CREATE_BEER';
export const RECEIVE_BEERS_ERRORS = 'RECEIVE_BEERS_ERRORS';
export const RECEIVE_REVIEW = 'RECEIVE_REVIEW';
export const RECEIVE_ALL_REVIEWS = 'RECEIVE_ALL_REVIEWS';

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
    return beer;
  }).fail(err => dispatch(receiveBeerErrors(err.responseJSON)))
};

export const deleteBeer = (beer) => dispatch => {
  return APIUtil.destroyBeer(beer)
    .then(beer => dispatch(removeBeer(beer)));
}

export const receiveAllBeers = beers => ({
  type: RECEIVE_ALL_BEERS,
  beers
});


export const createReview = review => dispatch => (
  APIUtil.createReview(review).then(review => (
    dispatch(receiveReview(review))
  ))
);

export const requestAllReviews = () => dispatch => {
  return APIUtil.fetchAllReviews()
    .then(reviews => {
      dispatch(receiveAllReviews(reviews)
      
    )})
};
    
export const receiveReview = ({ review, average_rating, author }) => ({
  type: RECEIVE_REVIEW,
  review,
  average_rating,
  author
});
    
export const receiveAllReviews = reviews => ({
  type: RECEIVE_ALL_REVIEWS,
  reviews
});

export const receiveSingleBeer = payload => ({
  type: RECEIVE_SINGLE_BEER,
  payload
});

export const receiveBeerErrors = errors => ({
  type: CREATE_BEER,
  errors
})

export const removeBeer = beer => ({
  type: REMOVE_BEER,
  beer
})

// request and receive all reviews