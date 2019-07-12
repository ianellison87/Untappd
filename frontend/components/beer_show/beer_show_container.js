import { connect } from 'react-redux';

import { requestSingleBeer, deleteBeer } from '../../actions/beer_actions';
import { selectBeer, selectReviewsForBeer } from '../../reducers/selectors';
import BeerShow from './beer_show';

const mapStateToProps = (state, { match }) => {
  const beerId = parseInt(match.params.beerId);
  const beer = selectBeer(state.entities, beerId);
  // const reviews = selectReviewsForBeer(state.entities, beer);
  
  return {
    // beerErrors: errorsReducer.session,
    beerId,
    beer,
    reviews: state.entities.reviews
  };
};

const mapDispatchToProps = dispatch => ({
  requestSingleBeer: id => dispatch(requestSingleBeer(id)),
  deleteBeer: id => dispatch(deleteBeer(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BeerShow);
