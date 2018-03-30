import React from 'react';
import { bindActionCreators } from "redux";
import { connect } from 'react-redux';
import search from '../../actions/search';
import {
  SearchFormStyled,
  SearchListContainerStyled,
  ImageContainerStyled,
} from './Search.styled';

 export class Search extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      queryStr: '',
      searchFetching: false,
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();

    const {
      getSearchRequested,
    } = this.props;

    const search = {
      queryStr: this.state.queryStr,
    };

    getSearchRequested(search.queryStr);
  }

  setQueryStr = (event) => {
    const { value } = event.target;

    this.setState({ queryStr: value });
  }

  render() {
    const {
      search
    } = this.props;

    const {
      searchFetching,
      ...resSearch,
    } = search

    return (
      <div>
        <SearchFormStyled id="searchForm" className="search" onSubmit={this.handleSubmit}>
          <input type="text" placeholder="Search for a gif..." name="qry_str" onChange={this.setQueryStr} />
          <input id="searchButton" type="submit" value="Submit" />
        </SearchFormStyled>
        <SearchListContainerStyled>
          {
            searchFetching ?
           'Loading search...' :
            resSearch.data && resSearch.data.length > 0 ?
              resSearch.data.map((key, idx) => (
                <ImageContainerStyled key={key.id}>
                  <img src={key.images.fixed_height_still.url} />
                </ImageContainerStyled>
              )) : <span></span>
          }
        </SearchListContainerStyled>
      </div>
    );
  }
}

export const mapStateToProps = (state) => {
  const {
    search,
  } = state;

  return {
    search,
  };
};

export const mapDispatchToProps = (dispatch) => {
  const { getSearchRequested } = search.creators;

  return bindActionCreators({
    getSearchRequested,
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
