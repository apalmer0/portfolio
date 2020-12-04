import React, { CSSProperties, FC, useState } from 'react'

import Header from '../../components/Header'
import Hero from '../../components/Hero'
import writingData from './data'
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

const Writing: FC<Props> = ({ location }) => {
  const { pathname } = location

  const [activeCategory, setActiveCategory] = useState('')

  const categories = writingData.map((data) => data.category)
  const uniqueCategories = ['All', ...categories]
  const activeWriting = writingData.filter(
    ({ category }) => category == activeCategory,
  )
  const displayedWriting =
    activeCategory === 'All' ? writingData : activeWriting

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

export default Writing
