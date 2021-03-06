export const selectAllBeers = state => Object.values(state.entities.beers);
export const selectAllReviews = state => Object.values(state.entities.reviews);

export const selectBeer = ({ beers }, beerId) => {
  return beers[beerId] || { reviewIds: [] };
};

export const selectReviews = ({ beers, reviews }, beer) => {
  return beer.reviewIds.map(reviewId => reviews[reviewId]);
};

export const asArray = ({ beers }) => (
  Object.keys(beers).map(key => beers[key])
);
