import React, { Component } from 'react';

import Footer from '../../components/Footer'
import Header from '../../components/Header'

class Skills extends Component {
  render() {
    return (
      <div>
        <Header />

        <div className="section section-breadcrumbs">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <h1>My Skills</h1>
              </div>
            </div>
          </div>
        </div>

        <div className="section">
          <div className="container">
            <div className="col-md-12">
              <h2>A growing toolbox</h2>
              <p>
                Every project has its own challenges, so I think it's important to keep improving on what I already know and continuing to learn more in order to get a project done well. Here's a selection of some of my skills - I've included things I'm still learning, but I've built an app using all of these:
              </p>
            </div>
            <div className="row">
              <div className="col-md-3 col-sm-4 col-xs-6">
                <div className="service-wrapper">
                  <img src="img/logos/color/ruby.png" alt="Service Name" />
                </div>
              </div>
              <div className="col-md-3 col-sm-4 col-xs-6">
                <div className="service-wrapper">
                  <img src="img/logos/color/rails.png" alt="Rails" />
                </div>
              </div>
              <div className="col-md-3 col-sm-4 col-xs-6">
                <div className="service-wrapper">
                  <img src="img/logos/color/react.png" alt="React" />
                </div>
              </div>
              <div className="col-md-3 col-sm-4 col-xs-6">
                <div className="service-wrapper">
                  <img src="img/logos/color/redux.png" alt="Redux" />
                </div>
              </div>
              <div className="col-md-3 col-sm-4 col-xs-6">
                <div className="service-wrapper">
                  <img src="img/logos/color/js.png" alt="Service Name" />
                </div>
              </div>
              <div className="col-md-3 col-sm-4 col-xs-6">
                <div className="service-wrapper">
                  <img src="img/logos/color/jQuery.png" alt="Service Name" />
                </div>
              </div>
              <div className="col-md-3 col-sm-4 col-xs-6">
                <div className="service-wrapper">
                  <img src="img/logos/color/github.png" alt="Service Name" />
                </div>
              </div>
              <div className="col-md-3 col-sm-4 col-xs-6">
                <div className="service-wrapper">
                  <img src="img/logos/color/heroku.png" alt="Service Name" />
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

export default Skills;
