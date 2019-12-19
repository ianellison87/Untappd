// import { connect } from 'react-redux';

// import ReviewsIndex from './review_index';
// // import { requestAllReviews } from '../../reducers/beers_reducer';
// import { selectAllReviews } from '../../reducers/selectors';

// const mapStateToProps = state => ({
//   reviews: selectAllReviews(state)
// });

// // const mapDispatchToProps = dispatch => ({
// //   requestAllReviews: () => dispatch(requestAllReviews())
// // });

// export default connect(mapStateToProps)(ReviewsIndex);

import { connect } from 'react-redux';

import RewievsIndex from '../reviews_index/review_index';
import { requestAllBeers } from '../../actions/beer_actions';
import { selectAllBeers, selectAllReviews } from '../../reducers/selectors';
import { requestAllReviews } from '../../actions/beer_actions';

const mapStateToProps = state => ({
  beers: selectAllBeers(state),
  reviews: selectAllReviews(state)
});

const mapDispatchToProps = dispatch => ({
  requestAllBeers: () => dispatch(requestAllBeers()),
  requestAllReviews: () => dispatch(requestAllReviews())
});

export default connect(mapStateToProps, mapDispatchToProps)(RewievsIndex);