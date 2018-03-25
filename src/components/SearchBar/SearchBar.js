import React, {Component} from 'react';
import {SearchButton, SearchInput} from "./SearchBar.styled";
import {FlexContainer} from "../../shared/components.styled";

export class SearchBar extends Component {
  searchGifs = (e) => {
    e.preventDefault();
    console.log(this.searchInput.value);
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