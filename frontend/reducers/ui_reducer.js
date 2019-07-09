import { combineReducers } from 'redux';
import merge from 'lodash/merge';

import errors from './errors_reducer';

export default combineReducers({
  errors,
});