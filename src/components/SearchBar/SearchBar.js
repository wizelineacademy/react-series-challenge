import React, { Component } from "react";
import { connect } from "react-redux";

class SearchBar extends Component {
  state = {
    value: ""
  };
  handleSearchInput = e => {
    const value = e.target.value;
    this.setState(() => ({
      value
    }));
  };
  handleSearch = e => {
    e.preventDefault();
    const query = this.state.value;
    this.props.getSearchGifs(query);
  };
  render() {
    return (
      <form onSubmit={this.handleSearch}>
        <input
          type="text"
          placeholder="Buscar"
          value={this.state.value}
          onChange={this.handleSearchInput}
        />
        <button type="onSubmit" onClick={this.handleSearch}>
          Buscar
        </button>
      </form>
    );
  }
}
const mapDispatchToProps = dispatch => {
  return {
    getSearchGifs: query => dispatch({ type: "GET_SEARCH_GIFS", query })
  };
};

export default connect(
  null,
  mapDispatchToProps
)(SearchBar);
