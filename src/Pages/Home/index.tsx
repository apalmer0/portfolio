import React, { FC } from 'react'
import { Link } from 'react-router-dom'

import Header from '../../components/Header'
import Hero from '../../components/Hero'
import styles from './styles'

const Home: FC = () => (
  <div style={styles.container}>
    <Header activeTab="home" />

    <Hero
      image="/img/headshot.jpg"
      name="Andrew Palmer"
      description="Builder, Climber, Tinkerer"
    >
      Software Developer for{' '}
      <a href="https://thegnar.co" target="_blank">
        The Gnar Company
      </a>
    </Hero>

    <div style={styles.aboutContainer}>
      <div style={styles.about}>
        <div style={styles.aboutTitle}>About Me</div>
        <div style={styles.aboutContent}>
          I love writing code, rock climbing, solving problems, and building
          things. I'm happiest when I'm taking on interesting or challenging
          projects.
        </div>
        <div style={styles.aboutContent}>
          I'm a full-stack developer. My favorite side to work on is whichever
          side I'm currently working on.
        </div>
        <div style={styles.aboutContent}>
          I spend most of my development time in Ruby on Rails, React, and React
          Native.
        </div>
        <div style={styles.aboutContent}>
          I prefer slightly overhanging boulders with small holds, and I will do
          whatever I can physically manage to keep my feet on the wall.
        </div>
        <div style={styles.aboutContent}>
          I'm currently working for{' '}
          <a href="https://thegnar.co" target="_blank">
            The Gnar Company
          </a>
          , a web and mobile software development consultancy in Boston, MA.
        </div>
        <div style={styles.aboutContent}>
          <Link to="/contact">Get in touch</Link>.
        </div>
      </div>
    </div>
  </div>
)

export default Home
