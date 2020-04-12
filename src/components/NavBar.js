import React from 'react';
import '../css/navbar.scss'

function NavBar() {
  return (
    <div className="nav">
      <a href="/" className="logo">zoomTV</a>
      <div className="right-nav">
        <a href="">events</a>
        <a href="">saved</a>
        <a href="">sign in</a>
        <div className="cta-button">
          <a href="">sign up</a>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
