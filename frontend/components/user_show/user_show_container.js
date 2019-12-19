import { connect } from 'react-redux';

import { receiveCurrentUser } from '../../actions/session_actions';
import { requestAllBeers } from '../../actions/beer_actions'
// import { usersReducer } from '../../reducers/users_reducer';
import UserShow from './user_show';

const mapStateToProps = (state, { match }) => {
  const userId = parseInt(match.params.userId);
  const user = receiveCurrentUser(state.entities, userId);


  return {
    userId,
    user,
    reviews: state.entities.reviews
  };
};

const mapDispatchToProps = dispatch => ({
  receiveCurrentUser: id => dispatch(receiveCurrentUser(id)),
  requestAllBeers: () => dispatch(requestAllBeers())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserShow);