import React, { Component } from 'react'
import { connect } from 'react-redux'

class Home extends Component {
  render () {
    return (
      <h1>Home</h1>
    )
  }

  componentDidMount () {
    this.props.fetch()
  }
}

function mapStateToProps(state) {
  return {
    count: state
  };
}

function mapDispatchToProps (dispatch) {
  return {
    fetch: () => dispatch({ type: 'FETCH_TRENDING' }),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);

