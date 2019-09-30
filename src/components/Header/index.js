import React, { Component } from 'react';
import { string } from 'prop-types';
import { Link } from "react-router-dom";

class Header extends Component {
  render() {
    const { activeTab } = this.props;
    const homeActive = activeTab === "home" ? "active" : "";
    const projectsActive = activeTab === "projects" ? "active" : "";
    const writingActive = activeTab === "writing" ? "active" : "";
    const hireActive = activeTab === "hire" ? "active" : "";

    return (
      <header role="banner" id="fh5co-header" className="mainmenu-wrapper">
        <div className="container">
          <nav id="mainmenu" className="mainmenu navbar navbar-default">
            <div className="navbar-header">
              <Link to="/" className="js-fh5co-nav-toggle fh5co-nav-toggle" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar"><i></i></Link>
              <Link to="/"><img className="logo-wrapper" src="/img/ap_logo.png" alt="Andrew Palmer portfolio" /></Link>
            </div>
            <div id="navbar" className="navbar-collapse collapse">
              <ul className="nav navbar-nav navbar-right">
                <li className={homeActive}><Link to="/">Home</Link></li>
                <li className={projectsActive}><Link to="/projects">Projects</Link></li>
                <li className={writingActive}><Link to="/writing">Writing</Link></li>
                <li className={hireActive}><Link to="/hire">Contact</Link></li>
              </ul>
            </div>
          </nav>
        </div>
      </header>
    )
  }
}

Header.propTypes = {
  activeTab: string,
}

export default Header;
