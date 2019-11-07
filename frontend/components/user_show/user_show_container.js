import { connect } from 'react-redux';

import { receiveCurrentUser } from '../../actions/session_actions';
// import { usersReducer } from '../../reducers/users_reducer';
import UserShow from './user_show';

const mapStateToProps = (state, { match }) => {
  const userId = parseInt(match.params.userId);
  const user = usersReducer(state.entities, userId);


  return {
    userId,
    user,
    reviews: state.entities.reviews
  };
};

const mapDispatchToProps = dispatch => ({
  receiveCurrentUser: id => dispatch(receiveCurrentUser(id)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserShow);