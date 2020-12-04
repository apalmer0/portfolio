import React, { CSSProperties, FC, useState } from 'react'

import Header from '../../components/Header'
import Hero from '../../components/Hero'
import projectData from './data'
import ProjectItem from '../../components/ProjectItem'
import styles from './styles'

interface Props {
  location: any
}

const menuOption = (active: boolean): CSSProperties => {
  const baseClass: CSSProperties = {
    cursor: 'pointer',
    fontSize: '14px',
    marginBottom: '5px',
  }
  const activeClass: CSSProperties = {
    color: '#105da1',
    fontSize: '18px',
  }

  return {
    ...baseClass,
    ...(active ? activeClass : {}),
  }
}

const Projects: FC<Props> = ({ location }) => {
  const { pathname } = location

  const [activeCategory, setActiveCategory] = useState('')

  const categories = projectData.map((data) => data.category)
  const uniqueCategories = ['All', ...categories]
  const activeProjects = projectData.filter(
    ({ category }) => category == activeCategory,
  )
  const displayedProjects =
    activeCategory === 'All' ? projectData : activeProjects

  return (
    <div style={styles.container}>
      <Header activeTab="projects" />

      <Hero name="Projects" description="I like working towards goals" />

      <div style={styles.projectsList}>
        <div style={styles.menuContainer}>
          <div style={styles.menuTitle}>Categories</div>
          {uniqueCategories.map((category) => {
            const active = activeCategory === category

            return (
              <div
                key={category}
                onClick={() => setActiveCategory(category)}
                style={menuOption(active)}
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

export default Projects
