import React, { CSSProperties, FC } from 'react'

import Header from '../../components/Header'
import Hero from '../../components/Hero'
import styles from './styles'
import projectData from '../Projects/data'
import writingData from '../Writing/data'

interface Props {
  history: any
  match: any
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

const Detail: FC<Props> = ({ history, match }) => {
  const { params, url } = match
  const { slug } = params
  const source = url.replace(slug, '').replace(/\//g, '')
  const allData = [...projectData, ...writingData]
  const detail = allData.find((data) => slug === data.slug)

  return (
    <div style={styles.container}>
      <Header activeTab={source} />

      {detail && (
        <Hero name={detail.title} description={detail.description}>
          <div style={styles.goBack} onClick={history.goBack}>
            go back
          </div>
        </Hero>
      )}

      {detail && <div style={styles.body}>{detail.body}</div>}
    </div>
  )
}

export default Detail
