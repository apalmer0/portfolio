import React, { Component } from "react";
import { Link } from "react-router-dom";

import Footer from '../../components/Footer'
import Header from '../../components/Header'
import Hero from '../../components/Hero'
import styles from './styles';

class Home extends Component {
  render() {
    return (
      <div>
        <Header activeTab="home" />

        <Hero
          image="/img/headshot.png"
          name="Andrew Palmer"
          description="Builder, Climber, Tinkerer"
        >
          Software Developer for <a href="https://thegnar.co" target="_blank">The Gnar Company</a>
        </Hero>

        <div style={styles.aboutContainer}>
          <div style={styles.about}>
            <div style={styles.aboutTitle}>About Me</div>
            <div style={styles.aboutContent}>
              I love writing code, solving problems, rock climbing, and building things. I'm happiest when I'm taking on interesting or challenging <Link to="/projects">Projects</Link>, and sometimes I <Link to="/writing">write</Link> about them.
            </div>
            <div style={styles.aboutContent}>
              I'm a full-stack developer. My favorite side to work on is whichever side I'm currently working on.
            </div>
            <div style={styles.aboutContent}>
              I spend most of my development time in Ruby on Rails, React, and Redux.
            </div>
            <div style={styles.aboutContent}>
              I prefer slightly overhanging boulders with small holds, and I will do whatever I can physically manage to keep my feet on the wall.
            </div>
            <div style={styles.aboutContent}>
              I'm currently working for The Gnar Company, a web and mobile software development consultancy in Boston, MA.
            </div>
          </div>
          <div style={styles.about}>
            <div style={styles.aboutTitle}>Get in Touch</div>
            <div style={styles.contactOptions}>
              <span className="icon-github">Github</span>
              <span>LinkedIn</span>
              <span>Email</span>
              <span>Phone</span>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    )
  }
}

export default Home;
