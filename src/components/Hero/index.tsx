import React, { FC } from 'react'

import styles from './styles'

interface Props {
  description: string
  image?: string
  name: string
}

const Hero: FC<Props> = ({ children, description, image, name }) => (
  <div style={styles.heroContainer}>
    {image && <img src={image} style={styles.headshot} />}

    <div style={styles.name}>{name}</div>

    <div style={styles.description}>{description}</div>

    {children && <div style={styles.role}>{children}</div>}
  </div>
)

export default Hero
