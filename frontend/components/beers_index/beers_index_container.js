import { connect } from 'react-redux';

import BeersIndex from './beers_index';
import { requestAllBeers } from '../../actions/beer_actions';
import { selectAllBeers} from '../../reducers/selectors';

const mapStateToProps = state => ({
  beers: selectAllBeers(state)
});

const mapDispatchToProps = dispatch => ({
  requestAllBeers: () => dispatch(requestAllBeers())
});

export default connect(mapStateToProps, mapDispatchToProps)(BeersIndex);