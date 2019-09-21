import React, { Component } from 'react';

import Footer from '../../components/Footer'
import Header from '../../components/Header'

class Hire extends Component {
  render() {
    return (
      <div>
        <Header activeTab="hire" />

        <div className="section section-breadcrumbs">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <h1>Get in touch</h1>
              </div>
            </div>
          </div>
        </div>

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

        <div className="section">
          <div className="container">
            <h2>Skills</h2>
            <div className="clients-logo-wrapper text-center row">
              <div className="col-lg-1 col-md-1 col-sm-3 col-xs-6"></div>
              <div className="col-lg-1 col-md-1 col-sm-3 col-xs-6"></div>
              <div className="col-lg-1 col-md-1 col-sm-3 col-xs-6"><a href="skills.html"><img src="img/logos/color/ruby.png" alt="ruby" /></a></div>
              <div className="col-lg-1 col-md-1 col-sm-3 col-xs-6"><a href="skills.html"><img src="img/logos/color/rails.png" alt="rails" /></a></div>
              <div className="col-lg-1 col-md-1 col-sm-3 col-xs-6"><a href="skills.html"><img src="img/logos/color/react.png" alt="react" /></a></div>
              <div className="col-lg-1 col-md-1 col-sm-3 col-xs-6"><a href="skills.html"><img src="img/logos/color/redux.png" alt="redux" /></a></div>
              <div className="col-lg-1 col-md-1 col-sm-3 col-xs-6"><a href="skills.html"><img src="img/logos/color/js.png" alt="js" /></a></div>
              <div className="col-lg-1 col-md-1 col-sm-3 col-xs-6"><a href="skills.html"><img src="img/logos/color/jQuery.png" alt="jQuery" /></a></div>
              <div className="col-lg-1 col-md-1 col-sm-3 col-xs-6"><a href="skills.html"><img src="img/logos/color/github.png" alt="github" /></a></div>
              <div className="col-lg-1 col-md-1 col-sm-3 col-xs-6"><a href="skills.html"><img src="img/logos/color/heroku.png" alt="heroku" /></a></div>
              <div className="col-lg-1 col-md-1 col-sm-3 col-xs-6"></div>
              <div className="col-lg-1 col-md-1 col-sm-3 col-xs-6"></div>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    )
  }
}

export default Hire;
