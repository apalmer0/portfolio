import React, { Component } from 'react'
import { FaGithub, FaLinkedin, FaPhone } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'

import Header from '../../components/Header'
import Hero from '../../components/Hero'
import SocialLinks from '../../components/SocialLinks'
import styles from './styles'

class Contact extends Component {
  render() {
    return (
      <div style={styles.container}>
        <Header activeTab="contact" />

        <Hero name="Contact" description="Get in touch." />

        <div style={styles.body}>
          <div style={styles.left}>
            <p>
              Have questions about some of the projects I've worked on? Got
              ideas for new projects or articles I should check out?
            </p>
            <p>Let me know!</p>
          </div>
          <div style={styles.right}>
            <SocialLinks />
          </div>
        </div>
      </div>
    )
  }
}

export default Contact
