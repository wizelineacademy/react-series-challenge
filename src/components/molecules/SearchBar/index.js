import React from "react";
import styled from "styled-components";
import { Input, Button } from "../../../components";

const StyledSearchBar = styled.div`
  margin: 0 auto;
  max-width: 700px;
  display: table;
`;

const SearchBar = props => {
  return (
    <StyledSearchBar>
      <Input />
      <Button title="Search" />
    </StyledSearchBar>
  );
};

export default SearchBar;
