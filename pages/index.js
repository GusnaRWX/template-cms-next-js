import React, { Component } from 'react'
import HomeContainer from '@/containers/home/HomeContainer'

export default class Home extends Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  render () {
    return (
      <HomeContainer
        {...this.props}
        {...this.state}
      />
    )
  }
}
