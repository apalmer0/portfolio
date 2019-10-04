import React, { Component } from 'react';
import { Link } from "react-router-dom";

import Header from '../../components/Header'
import Hero from '../../components/Hero'
import writingData from './data';
import ProjectItem from '../../components/ProjectItem'
import styles from './styles'

class Writing extends Component {
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
    const categories = writingData.map(data => data.category)
    const uniqueCategories = ["All", ...new Set(categories)]
    const activeWriting = writingData.filter(({ category }) => category == activeCategory)
    const displayedWriting = activeCategory === "All" ? writingData : activeWriting
    const { pathname } = this.props.location

    return (
      <div style={styles.container}>
        <Header activeTab="writing" />

        <Hero
          name="Writing"
          description="Things I've learned or think are interesting"
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
            {displayedWriting.map((writing) => (
              <ProjectItem
                data={writing}
                key={writing.title}
                pathname={pathname}
              />
            ))}
          </div>
        </div>
      </div>
    )
  }
}

export default Writing;
