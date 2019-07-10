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
          <div className="header-right">
            <button className="header-btn" onClick={logout}>Log Out</button>
          </div>
        </div>
      </header>
    </div>
  );


};


export default Header;
