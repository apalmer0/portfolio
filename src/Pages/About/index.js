import React, { Component } from 'react';

import Footer from '../../components/Footer'
import Header from '../../components/Header'
import Skills from '../../components/Skills'

class About extends Component {
  render() {
    return (
      <div>
        <Header />

        <div className="section section-breadcrumbs">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <h1>About Me</h1>
              </div>
            </div>
          </div>
        </div>

        <div className="section">
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-sm-6">
                <h3>Building apps, climbing rocks.</h3>
                <p>
                  I am a software developer and rock climber. Through rock climbing, I've learned about problem solving and how to be tenacious and remain committed to a goal despite repeated failure.
                  These skills have lent themselves well to web development, where no project is without its own unique challenges and obstacles.
                </p>
                <h3>Earn your burrito.</h3>
                <p>
                  A climbing friend used to encourage us to earn the Mexican dinner we'd always eat after a long day of climbing. This lesson has stuck with me - it may be easy to finish a job without
                  doing it well, but doing so is empty and nothing to be proud of. Whether in climbing, web development, or anything else in my life, I strive to do work I can be proud of.
                </p>
              </div>
              <div className="col-md-4 col-sm-6">
                <div className="team-member">
                  <div className="team-member-image">
                    <img src="img/f'd2.jpg" alt="Andrew Palmer" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="section">
          <div className="container">
            <div className="row">
              <div className="col-md-6 col-sm-6">
                <div className="in-press press-mom">
                  <a href="#">Andrew has got to be the smartest and most talented web developer in the whole entire world. What's this for again, honey?</a>
                </div>
              </div>
              <div className="col-md-6 col-sm-6">
                <div className="in-press press-bodie">
                  <a href="#">I know for a fact Andrew is the friendliest human there is. He feeds me, and takes me for walks, and sometimes we play fetch. Does it get any better?</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="section">
          <div className="container">
            <h2>Get in touch</h2>
            <div className="row">
              <div className="col-md-6 col-sm-6">
                <a href="https://github.com/apalmer0" target="_blank">
                  <div className="service-wrapper portfolio-item">
                    <img src="img/service-icon/github.png" alt="Github" />
                    <h3>Github</h3>
                  </div>
                </a>
              </div>
              <div className="col-md-6 col-sm-6">
                <a href="hire.html">
                  <div className="service-wrapper portfolio-item">
                    <img src="img/service-icon/hire.png" alt="Hire" />
                    <h3>Hire</h3>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>

        <Skills />

        <Footer />
      </div>
    )
  }
}

export default About;
