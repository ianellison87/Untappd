import React from 'react';
import { Link } from 'react-router-dom';



const Greeting = ({ currentUser, logout }) => {
  const sessionLinks = () => (
  <div>
    <div className="splash">
      <nav className="login-signup">
        <Link className="nav-btn" to="/login">SIGN IN</Link>
        <Link className="nav-btn" to="/signup">CREATE AN ACCOUNT</Link>
      </nav>
    </div>
      <div className="splash-content">
        <div className="left-side">
            <img className="bottles" src={window.bottles}/>
            <h1 className="bottles-text">UNBARRELD</h1>
            <p className="bottles-subtext">Drink Responsibly</p>
          <h2 className="tag-line">Discover and share your favorite beer.</h2>
        </div>
        <div className="right-side">
          <img className="phone-icon" src={window.phone_image}/>
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
