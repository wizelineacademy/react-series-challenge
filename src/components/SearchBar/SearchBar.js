import React, {Component} from 'react';
import {SearchButton, SearchInput} from "./SearchBar.styled";
import {FlexContainer} from "../../shared/components.styled";

export default class SearchBar extends Component {
  searchGifs = (e) => {
    e.preventDefault();
    const term = this.searchInput.value;
    this.props.onSearch(term);
  };
  render() {
    return (
      <form onSubmit={this.searchGifs}>
        <FlexContainer justifyContent='space-around'>
            <SearchInput
              type="text"
              placeholder="Enter something"
              innerRef={(input) => { this.searchInput = input }}
            />
            <SearchButton type="submit">Search</SearchButton>
        </FlexContainer>
      </form>
    )
  }
}