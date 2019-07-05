import React from 'react';
import { Link } from 'react-router-dom';



const Greeting = ({ currentUser, logout }) => {
  const sessionLinks = () => (
    <div className="splash">
      <nav className="login-signup">
        <button className="splash-button"href="#/login">
          Sign In
        </button>
        {/* &nbsp;or&nbsp; */}
        <button className="splash-button">
          <a href="#/signup">CREATE AN ACCOUNT</a>
        </button>
      </nav>
      <div>
        <div className="left-side">
            <img src="https://untappd.akamaized.net/assets/custom/homepage/images/ut-logo-bottles.svg"/>
        {/* </div>
        <div className="right-side"> */}
            <img className="phone-icon" src="https://untappd.akamaized.net/assets/custom/homepage/images/masthead-img-main.png"/>
        </div>
      </div>

    </div>
  );
  // const personalGreeting = () => (
  //   <hgroup className="header-group">
  //     <h2 className="header-name">Hi, {currentUser.username}!</h2>
  //     <button className="header-button" onClick={logout}>Log Out</button>
  //   </hgroup>
  // );

  return currentUser ? <div></div> : sessionLinks();
};


export default Greeting;
