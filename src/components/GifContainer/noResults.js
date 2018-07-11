import React, { Component } from "react";
import notFound from "../../assets/notFound.gif";
import { StyleDivNoResults } from "../../App.styles";

class NoResults extends Component {
  render() {
    return (
      <StyleDivNoResults>
        <img key="not-found" alt="not found" src={notFound} />
        <br />
        <label>No results</label>
      </StyleDivNoResults>
    );
  }
}

export default NoResults;
