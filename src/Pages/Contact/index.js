import React, { Component } from 'react';
import { FaGithub, FaLinkedin, FaPhone } from "react-icons/fa"
import { MdEmail } from "react-icons/md"

import Header from '../../components/Header'
import Hero from '../../components/Hero'
import styles from "./styles"

class Contact extends Component {
  render() {
    const iconAttributes = {
      color: '#105da1',
      size: "1.5em",
    }
    const links = [
      {
        icon: <FaGithub {...iconAttributes} />,
        text: "Github",
        url: "https://github.com/apalmer0",
      },
      {
        icon: <FaLinkedin {...iconAttributes} />,
        text: "LinkedIn",
        url: "https://www.linkedin.com/in/apalmer0/",
      },
      {
        icon: <MdEmail {...iconAttributes} />,
        text: "Email",
        url: "mailto:andrew@andrewpalmer.co",
      },
      {
        icon: <FaPhone {...iconAttributes} />,
        text: "Phone",
        url: "tel:617-690-8147",
      },
    ]
    return (
      <div>
        <Header activeTab="contact" />

        <Hero
          name="Contact"
          description="Get in touch."
        />

        <div style={styles.body}>
          <div style={styles.left}>
            <p>
              Have questions about some of the projects I've worked on? Want to let me know what I got wrong in something I wrote? Got ideas for new projects or articles I should check out?
            </p>
            <p>
              Let me know!
            </p>
          </div>
          <div style={styles.right}>
            {links.map(({ icon, text, url }) => (
              <div style={styles.contact} key={text}>
                <a href={url} target="_blank">
                  {icon}
                  <div style={styles.text}>{text}</div>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }
}

export default Contact;
