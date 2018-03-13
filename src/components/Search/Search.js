import React from "react";
import { connect } from "react-redux";
import { findDOMNode } from "react-dom";
import { bindActionCreators } from "redux";
import { withRouter } from "react-router-dom";

import actions from "./SearchActions";
import { SearchBarStyled, SearchFormStyled } from "./Search.styled";

class Search extends React.Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(event) {
    event.preventDefault();

    const query = findDOMNode(this.refs.input).value;
    const filterFavs = window.location.pathname === "/favs";

    const { history } = this.props;
    history.push(`/search/${query}`);

    if (filterFavs) {
      const { favs, favoriteFiltered } = this.props;
      const gifs = favs.filter(
        f => f.title.toLowerCase().indexOf(query) !== -1
      );
      favoriteFiltered(gifs);
    } else {
      const { searchRequested } = this.props;
      searchRequested({ q: query });
    }
  }
  render() {
    return (
      <SearchFormStyled onSubmit={this.handleSubmit}>
        <SearchBarStyled type="search" ref="input" />
      </SearchFormStyled>
    );
  }
}

const mapStateToProps = state => {
  const { favs } = state.favsReducer;
  return { favs };
};

const mapDispatchToProps = dispatch => {
  const { searchRequested, favoriteFiltered } = actions.creators;
  return bindActionCreators({ searchRequested, favoriteFiltered }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Search));
