import React, { Component } from 'react'
import {
  StyledInput,
  StyledForm
} from './SearchBar.style'
import { withRouter } from "react-router-dom";


class SearchBar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      query: this.props.match.params.term || ''
    }
  }

  onSubmit (event) {
    event.preventDefault();
    const isFavorite = this.props.location.pathname.split('/')[1] === 'favorites';
    this.props.searchGifs(this.state.query)
    if(isFavorite) {
      this.props.history.push(`/favorites/search/${this.state.query}`)
    } else {
      this.props.history.push(`/search/${this.state.query}`)
    }
  }

  render() {
    return(
      <StyledForm onSubmit={this.onSubmit.bind(this)}>
        <StyledInput
          placeholder="Search all the GIFs"
          value={this.state.query}
          onChange={event => this.setState({ query: event.target.value })}
        />
      </StyledForm>
    )
  }

}

export default withRouter(SearchBar)
