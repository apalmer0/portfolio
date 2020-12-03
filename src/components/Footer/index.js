import React, { Component } from 'react';

import styles from './styles';

class Footer extends Component {
  render() {
    const today = new Date()
    const currentYear = today.getFullYear()

    return (
      <div style={styles.footer}>
        <div style={styles.copyright}>
        {`© ${currentYear} Andrew Palmer.`}
        </div>
      </div>
    );
  }
}

export default Footer;
