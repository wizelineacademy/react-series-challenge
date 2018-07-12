import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import Nav from '../Nav'
import SearchBar from '../SearchBar'
import Gifs from '../Gifs'
import * as actionTypes from '../../actions'

class Home extends Component {
  constructor(props) {
    super(props)

    this.state = {
      query: '',
      loading: false,
      title: 'Trending Now'
    }
  }

  componentDidMount() {
    const { query } = this.state
    this.props.onFetchData(query)
  }

  updateQuery(e) {
    this.setState({
      query: e.target.value
    })
  }

  handleSearch = () => {
    const { query } = this.state
    const { onFetchData } = this.props

    onFetchData(query)

    const newTitle = !!query ? query : 'Trending Now'

    this.setState({
      title: newTitle
    })
  }


  render() {
    const { query, loading, title } = this.state
    return(
      <Fragment>
        <Nav />
        <SearchBar
          value={query}
          updateQuery={ (e) => this.updateQuery(e) }
          handleSearch={this.handleSearch}
        />
        {
          loading
            ? 'Cargando ...'
            : <Gifs
                gifs={this.props.gifs}
                title={title}
              />
        }
      </Fragment>
    )
  }
}

const mapStateToProps = state => {
  return {
    gifs: state.gifs
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onFetchData: (query) => dispatch(actionTypes.fetchDataRequest(query))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)