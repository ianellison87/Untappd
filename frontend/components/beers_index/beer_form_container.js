import { connect } from 'react-redux';

import BeerForm from './beer_form';
import { createBeer } from '../../actions/beer_actions';

const mapStateToProps = ({ ui }) => ({
  errors: ui.errors
});

const mapDispatchToPorps = dispatch => ({
  createBeer: beer => dispatch(createBeer(beer))
});

export default connect(
  mapStateToProps,
  mapDispatchToPorps
)(BeerForm);