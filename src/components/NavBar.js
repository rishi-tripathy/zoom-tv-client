import React from 'react';
import ReactGA from 'react-ga';
import '../css/navbar.scss'
import {
  NavLink
} from "react-router-dom";
function initializeReactGA() {
  ReactGA.initialize('UA-163504365-1')
  ReactGA.pageview('/');
}
function NavBar() {
  return (
    <div className="nav">
      <NavLink to="/" className="logo">zoomTV</NavLink>
      <div className="right-nav">
        <NavLink to="/about" activeClassName="active-link">about</NavLink>
        <NavLink to="/">
          <div className="cta-button">
            events
          </div>
        </NavLink>
      </div>
    </div>
  );
}

export default NavBar;
