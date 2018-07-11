import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import getTrendingGifsActions from "../../actions/trendingGifs";
import {
  StyledSearchForm,
  StyledInputForm,
  StyleFormGroup,
  StyledButtonForm
} from "../../App.styles";

class SearchForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: "",
      showSearchResults: false
    };
  }

  submitForm = event => {
    event.preventDefault();
    const { getSearchGifs, searchFav } = this.props;
    var query = this.state.query;
    if (query !== "") {
      switch (this.props.searchOn) {
        case "all":
          getSearchGifs(query);
          break;
        case "favs":
          searchFav(query);
          break;
        default:
          break;
      }
    }
  };

  handleChange = event => {
    const { value } = event.target;
    this.setState({ query: value });
    this.props.trendingGifs.query = value;
  };

  render() {
    return (
      <StyledSearchForm onSubmit={this.submitForm}>
        <StyleFormGroup>
          <StyledInputForm
            type="text"
            placeholder="Search for gifs"
            value={this.props.trendingGifs.query}
            onChange={this.handleChange}
          />
        </StyleFormGroup>
        <StyleFormGroup>
          <StyledButtonForm type="submit">Search</StyledButtonForm>
        </StyleFormGroup>
      </StyledSearchForm>
    );
  }
}

const mapStateToProps = state => {
  const { trendingGifs } = state;

  return {
    trendingGifs
  };
};

const mapDispatchToProps = dispatch => {
  const { getSearchGifs } = getTrendingGifsActions.creators;
  const { searchFav } = getTrendingGifsActions.creators;
  return bindActionCreators(
    {
      getSearchGifs,
      searchFav
    },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchForm);
