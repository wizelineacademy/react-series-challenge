import React from "react";
import { connect } from "react-redux";

class SearchInput extends React.Component {
  handleSearch = () => {
    const {
      onRequestSearchGifs,
      fromFavorites,
      searchInput,
      searchFavorite
    } = this.props;
    if (!fromFavorites) {
      onRequestSearchGifs(searchInput);
    }
  };

  handleKeyPress = e => {
    var keyCode = e.which || e.keyCode;
    const {
      onRequestSearchGifs,
      fromFavorites,
      searchInput,
      searchFavorite
    } = this.props;
    if (keyCode === 13) {
      if (!fromFavorites) {
        onRequestSearchGifs(searchInput);
      }
      return false;
    }
  };

  handleOnChange = e => {
    const {
      fromFavorites,
      onChangeSearchInput,
      onChangeFavoritesInput
    } = this.props;
    if (!fromFavorites) {
      onChangeSearchInput(e.target.value);
    } else {
      onChangeFavoritesInput(e.target.value);
    }
  };

  render() {
    const { searchInput, searchFavorite, fromFavorites } = this.props;
    return (
      <div>
        <input
          type="text"
          placeholder={
            !fromFavorites ? "Search gifs..." : "Buscar en favoritos"
          }
          onKeyPress={this.handleKeyPress}
          onChange={this.handleOnChange}
          defaultValue={fromFavorites ? searchFavorite : searchInput}
        />
        <button onClick={this.handleSearch}>
          <i className="fas fa-search" />
        </button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const {
    search: { searchInput, searchFavorite }
  } = state;
  return {
    searchInput,
    searchFavorite
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onRequestSearchGifs: query =>
      dispatch({ type: "API_CALL_SEARCH_REQUEST", query }),
    onChangeSearchInput: value =>
      dispatch({ type: "SEARCH_INPUT", query: value }),
    onChangeFavoritesInput: value =>
      dispatch({ type: "SEARCH_FAVORITE", query: value })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchInput);
