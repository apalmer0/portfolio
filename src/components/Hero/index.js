import React, { Component } from 'react'
import { string } from 'prop-types'

import styles from './styles'

class Hero extends Component {
  render() {
    const { children, description, image, name } = this.props
    return (
      <div style={styles.heroContainer}>
        {image && <img src={image} style={styles.headshot} />}
        <div style={styles.name}>{name}</div>
        <div style={styles.description}>{description}</div>
        {children && <div style={styles.role}>{children}</div>}
      </div>
    )
  }
}

Hero.propTypes = {
  activeTab: string,
}

export default Hero
