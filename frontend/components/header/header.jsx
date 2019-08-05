import React from 'react';
import { Link } from 'react-router-dom';



const Header = ({ currentUser, logout }) => {
  return (
    <div className="header-container">
      <header className="inner">
        <div className="header-inner">
          <div className="header-left">
            <h2 className="logo-title">UNBARRELD</h2>
            <p className="logo-text">DRINK  RESPONSIBLY</p>
          </div>
          <div className="header-link">
            <Link className="header-link-text" to='/home'>BEERS</Link>
            <Link className="header-link-text"to='/home'>REVIEWS</Link>
          </div>
          <div className="header-right">
            <div className="dropdown">
              <span>
                <img src="data:image/png;base64,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" alt=""/>
              </span>
              <div className="dropdown-content">
                <button className="header-btn" onClick={logout}><span className="button-text">LOG OUT</span></button>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );


};


export default Header;
