import { combineReducers} from 'redux';
import sessionReducer from './session_reducer';
import entitiesReducer from './entities_reducer';
import errorsReducer from './errors_reducer';
import uiReducer from './ui_reducer';
import beeeErrors from './beers_errors_reducer'
import usersReducer from './users_reducer'

const rootReducer = combineReducers({
  users: usersReducer,
  entities: entitiesReducer,
  session: sessionReducer,
  errors: errorsReducer,
  ui: uiReducer,
  beerErrors : beeeErrors
});

export default rootReducer;