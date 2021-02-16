import React, { FC } from 'react'
import { Link } from 'react-router-dom'

import Header from '../../components/Header'
import Hero from '../../components/Hero'
import './Home.scss'

const Home: FC = () => (
  <div className="container">
    <Header activeTab="home" />

    <Hero
      image="/img/headshot.jpg"
      name="Andrew Palmer"
      description="Builder, Climber, Tinkerer"
    >
      <>
        <p className="currentRole-title">
          Software Developer for{' '}
          <a href="https://thegnar.co" target="_blank" className="gnarLink">
            The Gnar Company
          </a>
        </p>
      </>
    </Hero>

    <div className="aboutContainer">
      <div className="about">
        <div className="aboutTitle">About Me</div>
        <div className="aboutContent">
          I love writing code, rock climbing, solving problems, and building
          things. I'm happiest when I'm taking on interesting or challenging
          projects.
        </div>
        <div className="aboutContent">
          I'm a full-stack developer. My favorite side to work on is whichever
          side I'm currently working on.
        </div>
        <div className="aboutContent">
          I spend most of my development time in Ruby on Rails, React, and React
          Native.
        </div>
        <div className="aboutContent">
          I prefer slightly overhanging boulders with small holds, and I will do
          whatever I can physically manage to keep my feet on the wall.
        </div>
        <div className="aboutContent">
          I'm currently working for{' '}
          <a href="https://thegnar.co" target="_blank">
            The Gnar Company
          </a>
          , a web and mobile software development consultancy in Boston, MA.
        </div>
        <div className="aboutContent">
          <Link to="/contact">Get in touch</Link>.
        </div>
      </div>
    </div>
  </div>
)

export default Home
