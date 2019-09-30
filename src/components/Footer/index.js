import React, { Component } from 'react';

import styles from './styles';

class Footer extends Component {
  render() {
    return (
      <div style={styles.footer}>
        <div style={styles.copyright}>
          &copy; 2019 Andrew Palmer.
        </div>
      </div>
    );
  }
}

export default Footer;
