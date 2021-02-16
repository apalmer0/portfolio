import React, { Component } from 'react'

import Header from '../../components/Header'
import Hero from '../../components/Hero'
import SocialLinks from '../../components/SocialLinks'
import './Contact.scss'

class Contact extends Component {
  render() {
    return (
      <div className="container">
        <Header activeTab="contact" />

        <Hero name="Contact" description="Get in touch." />

        <div className="body">
          <div className="left">
            <p>
              Have questions about some of the projects I've worked on? Got
              ideas for new projects or articles I should check out?
            </p>
            <p>Let me know!</p>
          </div>
          <div className="right">
            <SocialLinks />
          </div>
        </div>
      </div>
    )
  }
}

export default Contact
