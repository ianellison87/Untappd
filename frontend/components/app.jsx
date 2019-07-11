import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import LoginFormContainer from './session_form/login_form_container';
import SignupFormContainer from './session_form/signup_form_container';
import Splash from './splash_page/splash';
import { AuthRoute, ProtectedRoute } from '../../frontend/util/route_util';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';
import ReviewsFormContainer from '../components/beers_index/review_form_container';
import ReviewsIndexContainer from '../components/reviews_index/reviews_index_container';
import BeersIndexContainer from '../components/beers_index/beers_index_container';
import BeersFormContainer from '../components/beers_index/beer_form_container';
import BeersShowContainer from '../components/beer_show/beer_show_container';

const App = () => (
  <div>
    <header>
      <div className="app-title">
        
       
      </div>
    </header>
    <Switch>
      <ProtectedRoute exact path="/home" component={BeersIndexContainer}/>
      <ProtectedRoute exact path="/beers/new" component={BeersFormContainer}/>
      <ProtectedRoute exact path="/reviews" component={ReviewsIndexContainer}/>
      <ProtectedRoute exact path="/reviews/new" component={ReviewsFormContainer}/>
      <ProtectedRoute exact path="/beers/:beerId" component={BeersShowContainer}/>
      <AuthRoute exact path="/login" component={LoginFormContainer} />
      <AuthRoute exact path="/signup" component={SignupFormContainer} />
      <AuthRoute path="/" component={Splash} /> 
    </Switch>
  </div>
)

export default App;