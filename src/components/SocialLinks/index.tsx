import React, { FC } from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'

import styles from './styles'

const iconAttributes = {
  color: '#105da1',
  size: '1.5em',
}
const LINKS = [
  {
    icon: <FaGithub {...iconAttributes} />,
    text: 'Github',
    url: 'https://github.com/apalmer0',
  },
  {
    icon: <FaLinkedin {...iconAttributes} />,
    text: 'LinkedIn',
    url: 'https://www.linkedin.com/in/apalmer0/',
  },
  {
    icon: <MdEmail {...iconAttributes} />,
    text: 'Email',
    url: 'mailto:andrew.palmer.10+portfolio@gmail.com',
  },
]

const SocialLinks: FC = () => (
  <div>
    {LINKS.map(({ icon, text, url }) => (
      <div style={styles.contact} key={text}>
        <a href={url} target="_blank">
          {icon}
          <div style={styles.text}>{text}</div>
        </a>
      </div>
    ))}
  </div>
)

export default SocialLinks
