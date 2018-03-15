import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import searchActions from '../../actions/search';
import searchImage from '../../assets/search.gif'
import pathNames from '../../routes'
import {
  SearchInput,
  SearchButton,
  SearchLink,
  InputContainer,
  TitleStyled
} from './SearchInput.styled';

export class SearchComponent extends Component {
  static defaultProps = {
  };
  static propTypes = {
    children: PropTypes.node,
  };

  handleOnChange = (e) =>{
    this.props.updateSearchTerm(e.target.value);
  }


  render () {
    const {
      search
    } = this.props;
    return (
      <div>
      <TitleStyled>Search Giphy for any gif!</TitleStyled>
      <InputContainer >
        <SearchInput value={unescape(search.currentTerm)} onChange={this.handleOnChange} />
        <SearchLink to={`${pathNames.SEARCH_PATH}/${search.currentTerm}`}>
          <SearchButton  src={ searchImage } />
        </SearchLink>
      </InputContainer>
      </div>
    );
  }
}

export const mapStateToProps = state => {
  const { search } = state;
  return {
    search,
  };
};

export const mapDispatchToProps = dispatch => {
  const searchRequest = searchActions.creators.searchRequest;
  const updateSearchTerm = searchActions.creators.updateSearchTerm;
  return bindActionCreators({
    searchRequest,
    updateSearchTerm
  }, dispatch);
};

export default connect(mapStateToProps,mapDispatchToProps)(SearchComponent);
