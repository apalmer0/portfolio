import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Header from '../../components/Header'
import Hero from '../../components/Hero'
import styles from './styles'

class NotFound extends Component {
  render() {
    return (
      <div style={styles.container}>
        <Header />

        <Hero
          name="404"
          description="Page Not Found"
        />

        <div style={styles.body}>
          <p>Sorry, the page you are looking for isn't here, or never was...</p>
          <p>Maybe try the <Link to="/">homepage</Link>?</p>
        </div>
      </div>
    )
  }
}

export default NotFound;
