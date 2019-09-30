import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Footer from '../../components/Footer'
import Header from '../../components/Header'
import Hero from '../../components/Hero'

class NotFound extends Component {
  render() {
    return (
      <div>
        <Header />

        <Hero
          name="404"
          description="Page Not Found"
        />

        <div className="section">
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <div className="error-page-wrapper">
                  <p>Sorry, the page you are looking for is not here or never was...</p>
                  <p>Maybe try the <Link to="/">homepage</Link>?</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    )
  }
}

export default NotFound;
