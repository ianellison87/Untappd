import { connect } from 'react-redux';

import { requestSingleBeer } from '../../actions/beer_actions';
import { selectBeer } from '../../reducers/selectors';
import BeerShow from './beer_show';

const mapStateToProps = (state, { match }) => {
  const beerId = parseInt(match.params.beerId);
  const bench = selectBeer(state.entities, beerId);
  // const reviews = selectReviewsForBench(state.entities, beer);
  return {
    beerId,
    beer,
    // reviews
  };
};

const mapDispatchToProps = dispatch => ({
  requestSingleBeer: id => dispatch(requestSingleBeer(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BeerShow);
