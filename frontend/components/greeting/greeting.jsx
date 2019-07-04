import React from 'react';
import { Link } from 'react-router-dom';



const Greeting = ({ currentUser, logout }) => {
  const sessionLinks = () => (
    <div className="clearfix">
      <nav className="login-signup">
        <div className="button">
          {/* <Link to="/login">SIGN IN</Link> */}
        </div>
        {/* &nbsp;or&nbsp; */}
        <div className="button">
          {/* <Link to="/signup">CREATE AN ACCOUNT</Link> */}
        </div>
      </nav>
    </div>
  );
  const personalGreeting = () => (
    <hgroup className="header-group">
      <h2 className="header-name">Hi, {currentUser.username}!</h2>
      <button className="header-button" onClick={logout}>Log Out</button>
    </hgroup>
  );

  return currentUser ? personalGreeting() : sessionLinks();
};


export default Greeting;
