import React, {Component} from 'react'
import styled from 'styled-components'

const Input = styled.input`
  padding: 0.5em;
  margin: 0.5em;
  border: 1px solid #ccc;
  color: gray
  border-radius: 3px;
`

class SearchBar extends Component {
  constructor (props) {
    super(props)

    this.state = {
      searchValue: ''
    }
  }

  handleOnchange(event) {
    this.setState({searchValue: event.target.value})
  }

  render () {
    return (
      <div>
        <Input
          type="text"
          value={this.state.searchValue}
          onChange={(event) => this.handleOnchange(event)}
        />
      </div>
    )
  }
}

export default SearchBar
