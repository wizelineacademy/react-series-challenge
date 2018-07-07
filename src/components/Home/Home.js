import React, { Component } from 'react'
import { connect } from 'react-redux'
import contentActions from '../../actions/content'
import Header from '../Header'
import Searchbar from '../Searchbar'

const {
  startLoading,
} = contentActions.actions

class Home extends Component {

  componentDidMount() {
    this.props.dispatch(startLoading())
  }

  render() {
    return(
      <div>
        <Header/>
        <Searchbar/>
        Home
      </div>
    )
  }
}

export default connect(state => state)(Home)
