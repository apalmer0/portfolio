import React, { Component } from 'react';
import { Link } from "react-router-dom";

import Header from '../../components/Header'
import Hero from '../../components/Hero'
import projectData from './data';
import ProjectItem from '../../components/ProjectItem'
import styles from './styles'

class Projects extends Component {
  constructor() {
    super()

    this.state = { activeCategory: "All" }
    this.setTab = this.setTab.bind(this);
  }

  setTab(activeCategory) {
    return () => this.setState({ activeCategory });
  }

  render() {
    const { activeCategory } = this.state;
    const categories = projectData.map(data => data.category)
    const uniqueCategories = ["All", ...new Set(categories)]
    const activeProjects = projectData.filter(({ category }) => category == activeCategory)
    const displayedProjects = activeCategory === "All" ? projectData : activeProjects
    const { pathname } = this.props.location

    return (
      <div style={styles.container}>
        <Header activeTab="projects" />

        <Hero
          name="Projects"
          description="I like working towards goals"
        />

        <div style={styles.projectsList}>
          <div style={styles.menuContainer}>
            <div style={styles.menuTitle}>Categories</div>
            {uniqueCategories.map(category => {
              const active = activeCategory === category;

              return (
                <div
                  key={category}
                  onClick={this.setTab(category)}
                  style={styles.menuOption(active)}
                >
                  {category}
                </div>
              )
            })}
          </div>
          <div style={styles.listContainer}>
            {displayedProjects.map((project) => (
              <ProjectItem
                data={project}
                key={project.title}
                pathname={pathname}
              />
            ))}
          </div>
        </div>
      </div>
    )
  }
}

export default Projects;
