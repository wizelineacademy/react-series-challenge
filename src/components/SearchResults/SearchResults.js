import React from "react";
import { connect } from "react-redux";

import TileList from "../shared/TileList";
import { SearchResultsEMptyStyled } from "./SearchResults.styled";

const SearchResults = ({ gifs, loaded }) => {
  if (loaded && !gifs.length) {
    return (
      <SearchResultsEMptyStyled>
        <p>no gif matched your query, search again</p>
      </SearchResultsEMptyStyled>
    );
  }
  return <TileList gifs={gifs} loading={!loaded} />;
};

const mapStateToProps = state => {
  const { gifs, loaded } = state.searchReducer;
  return { gifs, loaded };
};

export default connect(mapStateToProps, null)(SearchResults);
