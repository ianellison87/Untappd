import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';

const App = () => (
  <div>
    <header>
      <h1>Unbarreld</h1>
      <GreetingContainer />
    </header>
    <Switch>

    </Switch>
  </div>
)

export default App;