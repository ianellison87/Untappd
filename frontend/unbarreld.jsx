import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';

//  Temps
import { login, signup, logout } from './actions/session_actions'

document.addEventListener("DOMContentLoaded", () => {
  let store = configureStore();
  let root = document.getElementById('root');
  ReactDOM.render(<Root store={store}/>, root)
  window.getState = store.getState;
  window.dispatch = store.dispatch;
});

window.login = login;
window.signup = signup;
window.logout = logout; 