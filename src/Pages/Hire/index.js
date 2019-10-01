import React, { Component } from 'react';

import Footer from '../../components/Footer'
import Header from '../../components/Header'
import Hero from '../../components/Hero'

class Hire extends Component {
  render() {
    return (
      <div>
        <Header activeTab="Contact" />

        <Hero
          name="Get In Touch"
          description="Need a project you can be proud of?"
        />

        <div className="section">
          <div className="container">
            <div className="row">
              <div className="col-md-4 col-sm-6">
                <div className="team-member">
                  <div className="team-member-image">
                    <img src="img/Profile.jpg" alt="Andrew Palmer" />
                  </div>
                </div>
              </div>
              <div className="col-md-8 col-sm-5">
                <h3>Need a project you can be proud of?</h3>
                <p>
                  I work hard and never settle for 'good enough'. If you want to work with a professional to make a project you can be proud of, get in touch today.
                </p>
                <br />
                <a href="mailto:andrew@andrewpalmer.co?subject=Freelance%20work" className="btn btn-orange btn-lg">Get in touch today!</a>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    )
  }
}

export default Hire;
