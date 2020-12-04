import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { shape, string } from 'prop-types'

import styles from './styles'

class ProjectItem extends Component {
  render() {
    const { data, pathname } = this.props
    const { category, description, image, slug, title } = data

    return (
      <div style={styles.projectItem}>
        {image && (
          <div style={styles.imageContainer}>
            <img style={styles.image} src={image} />
          </div>
        )}
        <div style={styles.contentContainer}>
          <Link to={`${pathname}/${slug}`} style={styles.title}>
            {title}
          </Link>
          <div style={styles.category}>{category}</div>
          <div style={styles.description}>{description}</div>
        </div>
      </div>
    )
  }
}

ProjectItem.propTypes = {
  description: string,
  title: string,
}

export default ProjectItem
