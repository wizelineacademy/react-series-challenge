import React, { Component } from 'react'
import {
  StyledInput
} from './SearchBar.style'
import { withRouter } from "react-router-dom";


class SearchBar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      query:''
    }
  }

  onSubmit (event) {
  event.preventDefault();
  this.props.searchGifs(this.state.query)
  this.props.history.push(`/search/${this.state.query}`)
  }

  render() {
    return(
      <form onSubmit={this.onSubmit.bind(this)}>
        <StyledInput
          placeholder="Search all the GIFs"
          value={this.state.query}
          onChange={event => this.setState({ query: event.target.value })}
        />
      </form>
    )
  }

}

export default withRouter(SearchBar)
