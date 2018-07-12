import React from "react";
import styled from "styled-components";
import Input from "../../atoms/Input/index";

const StyledSearchBar = styled.div`
  margin: 0 auto;
  max-width: 700px;
  display: table;
`;

const SearchBar = props => {
  return (
    <StyledSearchBar>
      <Input
        getInputValue={props.getInputValue}
        placeholder="Type some words..."
      />
    </StyledSearchBar>
  );
};

export default SearchBar;
