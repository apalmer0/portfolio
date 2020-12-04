import React, { CSSProperties, FC } from 'react'
import { Link } from 'react-router-dom'

import styles from './styles'

interface Props {
  activeTab: string
}
const LINKS = [
  { url: '/', text: 'Home' },
  { url: '/contact', text: 'Contact' },
]

const navigationOption = (active: boolean): CSSProperties => {
  const baseClass = {
    color: '#999',
    fontSize: '17px',
    lineHeight: '50px',
    paddingLeft: '15px',
    paddingRight: '15px',
    textDecoration: 'none',
  }
  const activeClass: CSSProperties = {
    color: '#105da1',
    fontWeight: 'bold',
  }

  return {
    ...baseClass,
    ...(active ? activeClass : {}),
  }
}

const Header: FC<Props> = ({ activeTab }) => {
  return (
    <header role="banner" style={styles.headerContainer}>
      <div style={styles.contentContainer}>
        <nav style={styles.navigation}>
          <div style={styles.navigationHeader}>
            <Link to="/">
              <img
                style={styles.logo}
                src="/img/ap_logo.png"
                alt="Andrew Palmer portfolio"
              />
            </Link>
          </div>
          <div style={styles.navigationOptionsContainer}>
            <ul style={styles.navigationOptions}>
              {LINKS.map(({ url, text }) => (
                <li style={styles.navigationOptionContainer} key={text}>
                  <Link
                    style={navigationOption(activeTab === text.toLowerCase())}
                    to={url}
                  >
                    {text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Header
