import React, { FC } from 'react'
import { Link } from 'react-router-dom'

import styles from './styles'

interface Data {
  category: string
  description: string
  image: string
  slug: string
  title: string
}

interface Props {
  data: Data
  pathname: string
}

const ProjectItem: FC<Props> = ({ data, pathname }) => {
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

export default ProjectItem
