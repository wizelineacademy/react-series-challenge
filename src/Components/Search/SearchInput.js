import React from "react";
import { connect } from "react-redux";
import { SearchStyled, InputStyled, ButtonStyled } from "./SearchInput.styled";

class SearchInput extends React.Component {
  handleSearch = () => {
    const {
      onRequestSearchGifs,
      fromFavorites,
      searchInput,
      searchFavorite,
      onFilterFavorites
    } = this.props;
    if (!fromFavorites) {
      onRequestSearchGifs(searchInput);
    } else {
      onFilterFavorites(searchFavorite);
    }
  };

  handleKeyPress = e => {
    var keyCode = e.which || e.keyCode;
    const {
      onRequestSearchGifs,
      fromFavorites,
      searchInput,
      searchFavorite,
      onFilterFavorites
    } = this.props;

    console.log(e.target.value);
    if (
      keyCode === 13 ||
      ((fromFavorites && !searchFavorite) || (!fromFavorites && !searchInput))
    ) {
      if (!fromFavorites) {
        onRequestSearchGifs(searchInput);
      } else {
        onFilterFavorites(searchFavorite);
      }
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
      <SearchStyled>
        <InputStyled
          type="text"
          placeholder={
            !fromFavorites ? "Buscar GIFs..." : "Buscar en favoritos..."
          }
          onKeyUp={this.handleKeyPress}
          onChange={this.handleOnChange}
          defaultValue={fromFavorites ? searchFavorite : searchInput}
        />
        <ButtonStyled onClick={this.handleSearch}>
          <i className="fas fa-search" />
        </ButtonStyled>
      </SearchStyled>
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
      dispatch({ type: "SEARCH_FAVORITE", query: value }),
    onFilterFavorites: query =>
      dispatch({ type: "FAVORITE_FILTER", payload: query })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchInput);
