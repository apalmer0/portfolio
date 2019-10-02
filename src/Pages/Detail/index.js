import React, { Component } from 'react';
import { Link } from "react-router-dom";

import Header from '../../components/Header'
import Hero from '../../components/Hero'
import styles from './styles'
import projectData from '../Projects/data'
import writingData from '../Writing/data'

class Detail extends Component {
  constructor() {
    super()

    this.goBack = this.goBack.bind(this)
  }

  goBack() {
    this.props.history.goBack()
  }

  render() {
    const { params, url } = this.props.match
    const { slug } = params
    const source = url.replace(slug, "").replace(/\//g,"")
    const allData = [
      ...projectData,
      ...writingData,
    ]
    const detail = allData.find((data) => slug === data.slug)

    return (
      <div>
        <Header activeTab={source} />

        <Hero
          name={detail.title}
          description={detail.description}
        >
          <div style={styles.goBack} onClick={this.goBack}>go back</div>
        </Hero>

        <div style={styles.body}>
          {detail.body}
        </div>
      </div>
    )
  }
}

export default Detail;
