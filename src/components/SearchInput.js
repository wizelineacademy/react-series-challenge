import React, { Component } from 'react'
import styled from 'styled-components';
import { withRouter } from 'react-router';

class SearchInput extends Component {
  constructor (props) {
    super(props);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.updateInputValue = this.updateInputValue.bind(this);
    this.state = {
      inputValue: '',
    };
  }

  render () {
    return (
      <SearchContainer>
        <InputStyled value={this.state.inputValue} onChange={this.updateInputValue}
          onKeyPress={this.handleKeyPress} type="text" align="left" placeholder="search..." />
      </SearchContainer>
    )
  }

  handleKeyPress (e) {
    if (e.key === 'Enter') {
      this.props.history.push(`/search/${this.state.inputValue}`);
    }
  }

  updateInputValue (e) {
    this.setState({
      inputValue: e.target.value
    })
  }
}

export default withRouter(SearchInput);

const SearchContainer = styled.div`
  height: 50px;
  position: relative;
`

const InputStyled = styled.input`
  padding-top: calc(0.375em - 1px);
  position: relative;
  vertical-align: top;
  background-color: white;
  border-color: #dbdbdb;
  color: #363636;
  display: inline-flex;
  border-radius: 290486px;
  padding-left: 1em;
  padding-right: 1em;
  position: absolute;
  left: 30px;
  top: 20px;
  box-shadow: inset 0 1px 2px rgba(10, 10, 10, 0.1);
  align-items: center;
  border: 1px solid transparent;
  font-size: 1rem;
  height: 2.25em;
  &:focus {
    outline: 0;
  }
`
