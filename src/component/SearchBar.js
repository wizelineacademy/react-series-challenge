import React, {Component} from 'react'
import styled from 'styled-components'

const Div = styled.div`
  text-align: center;
`

const Input = styled.input`
  padding: 0.5em;
  margin: 0.5em;
  border: 1px solid #ccc;
  color: gray
  border-radius: 3px;
  width: 50%;
`

class SearchBar extends Component {
  constructor (props) {
    super(props)

    this.state = {
      searchValue: ''
    }
  }

  handleOnchange(event) {
    this.setState(
      {searchValue: event.target.value},
      () => {this.props.searchFunction(this.state.searchValue)}
    )
  }

  render () {
    return (
      <Div>
        <Input
          className='input'
          type='text'
          value={this.state.searchValue}
          onChange={(event) => this.handleOnchange(event)}
          placeholder={this.props.placeholder}
        />
      </Div>
    )
  }
}

export default SearchBar
