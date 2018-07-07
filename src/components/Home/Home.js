import React, { Component } from 'react'
import { connect } from 'react-redux'
import contentActions from '../../actions/content'

const {
  startLoading,
} = contentActions.actions

class Home extends Component {

  componentDidMount() {
    this.props.dispatch(startLoading())
  }

  render() {
    return(
      <div>Home</div>
    )
  }
}

export default connect(state => state)(Home)
