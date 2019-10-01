import React, { Component } from 'react';
import { string } from 'prop-types';
import { Link } from "react-router-dom";

import styles from "./styles"

class Header extends Component {
  render() {
    const { activeTab } = this.props;
    const links = [
      { url: "/", text: "Home" },
      { url: "/projects", text: "Projects" },
      { url: "/writing", text: "Writing" },
      { url: "/contact", text: "Contact" },
    ]

    return (
      <header role="banner" style={styles.headerContainer}>
        <div style={styles.contentContainer}>
          <nav style={styles.navigation}>
            <div style={styles.navigationHeader}>
              <Link to="/"><img style={styles.logo} src="/img/ap_logo.png" alt="Andrew Palmer portfolio" /></Link>
            </div>
            <div style={{ display: 'block' }}>
              <ul style={styles.navigationOptions}>
                {links.map(({ url, text }) => (
                  <li style={styles.navigationOptionContainer} key={text}>
                    <Link
                      style={styles.navigationOption(activeTab === text.toLowerCase())}
                      to={url}
                    >
                      {text}
                    </Link>
                  </li>
                ))}
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
