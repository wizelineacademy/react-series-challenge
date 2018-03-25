import React, {Component} from 'react';
import {SearchButton, SearchInput} from "./SearchBar.styled";
import {FlexContainer} from "../../shared/components.styled";

export class SearchBar extends Component {
  render() {
    return (
      <FlexContainer justifyContent='space-around'>
        <SearchInput type="text" placeholder="Enter something"/>
        <SearchButton>Search</SearchButton>
      </FlexContainer>
    )
  }
}