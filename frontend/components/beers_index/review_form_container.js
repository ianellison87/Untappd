import { connect } from 'react-redux';

import { createReview } from '../../actions/beer_actions';
import ReviewForm from './review_form';

const mapDispatchToProps = dispatch => ({
  createReview: review => dispatch(createReview(review))
});

export default connect(
  null,
  mapDispatchToProps
)(ReviewForm);