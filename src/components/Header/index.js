import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <header role="banner" id="fh5co-header" className="mainmenu-wrapper">
        <div className="container">
          <div className="menuextras" />
          <nav id="mainmenu" className="mainmenu navbar navbar-default">
            <div className="navbar-header">
              <a href="#" className="js-fh5co-nav-toggle fh5co-nav-toggle" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar"><i></i></a>
              <a href="index.html"><img className="logo-wrapper" src="img/ap_logo.png" alt="Andrew Palmer portfolio"></img></a>
            </div>
            <div id="navbar" className="navbar-collapse collapse">
              <ul className="nav navbar-nav navbar-right">
                <li className="active"><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/skills">Skills</Link></li>
                <li><Link to="/hire">Hire</Link></li>
              </ul>
            </div>
          </nav>
        </div>
      </header>
    )
  }
}

export default Header;
