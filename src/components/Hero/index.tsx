import React, { FC } from 'react'

import './Hero.scss'

interface Props {
  description: string
  image?: string
  name: string
}

const Hero: FC<Props> = ({ children, description, image, name }) => (
  <div className="heroContainer">
    {image && <img src={image} className="headshot" />}

    <div className="name">{name}</div>

    <div className="description">{description}</div>

    {children && <div className="children">{children}</div>}
  </div>
)

export default Hero
