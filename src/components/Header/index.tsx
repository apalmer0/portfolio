import React, { CSSProperties, FC } from 'react'
import { Link } from 'react-router-dom'

import './Header.scss'

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
    <header role="banner" className="headerContainer">
      <div className="contentContainer">
        <nav className="navigation">
          <div className="navigationHeader">
            <Link to="/">
              <img
                className="logo-mobile"
                src="/img/ap.png"
                alt="Andrew Palmer portfolio"
              />
              <img
                className="logo-desktop"
                src="/img/ap_logo.png"
                alt="Andrew Palmer portfolio"
              />
            </Link>
          </div>
          <div className="navigationOptionsContainer">
            <ul className="navigationOptions">
              {LINKS.map(({ url, text }) => (
                <li className="navigationOptionContainer" key={text}>
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
