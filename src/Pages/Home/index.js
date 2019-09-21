import React, { Component } from "react";

import Footer from '../../components/Footer'
import Header from '../../components/Header'
import Skills from '../../components/Skills'

class Home extends Component {
  render() {
    return (
      <div>
        <Header activeTab="home" />

        <div className="homepage-slider">
          <div id="sequence">
            <ul className="sequence-canvas">
              <li className="bg1">
                <h2 className="title">Hi, I'm Andrew.</h2>
                <h3 className="subtitle">A professional, full-stack web developer with a strong analytical and client-facing background.</h3>
              </li>
              <li className="bg2">
                <h2 className="title">Hi, I'm Andrew.</h2>
                <h3 className="subtitle">A professional, full-stack web developer with a strong analytical and client-facing background.</h3>
              </li>
              <li className="bg3">
                <h2 className="title">Hi, I'm Andrew.</h2>
                <h3 className="subtitle">A professional, full-stack web developer with a strong analytical and client-facing background.</h3>
              </li>
            </ul>
            <div className="sequence-pagination-wrapper">
              <ul className="sequence-pagination">
                <li>1</li>
                <li>2</li>
                <li>3</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="section">
          <div className="container">
            <h2>Get in touch</h2>
            <div className="row">
              <div className="col-md-6 col-sm-12 col-xs-12">
                <div className="service-wrapper">
                  <img src="img/service-icon/climb.png" alt="Climbing" />
                  <h3>Climbing</h3>
                  <p>Rock climbing has taught me how to work hard and solve problems, skills I use as a developer.</p>
                </div>
              </div>
              <div className="col-md-6 col-sm-12 col-xs-12">
                <div className="service-wrapper">
                  <img src="img/service-icon/burrito.png" alt="Motivation" />
                  <h3>Motivation</h3>
                  <p>Rewards are best when they're earned. In climbing and in life, you have to earn your burrito.</p>
                </div>
              </div>
            </div>
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

        <div className="section section-white">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="calltoaction-wrapper">
                  <h3>Get in touch today!</h3>
                  <div>
                    <a href="hire.html" className="btn btn-orange">Contact</a>
                  </div>
                </div>
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

export default Home;
