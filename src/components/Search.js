import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
  getSearchItems,
  searchFavorites,
  updateQuery,
  clearQuery
} from '../actions';
import {
  ClearButton,
  SearchText,
  SearchButton,
  SearchDiv
} from './styled';

class Search extends Component {
  onClick() {
    const {
      getSearchItems,
      searchFavorites,
      query,
      isFavorites
    } = this.props;

    if (!query) return;

    if (isFavorites) {
      searchFavorites(query);
    } else {
      getSearchItems(query);
    }
  }

  onUpdateQuery({ target }) {
    this.props.updateQuery(target.value);
  }

  componentWillMount() {
    this.props.clearQuery();
  }

  render() {
    const { query, clearQuery } = this.props;
    const isHidden = query ? '' : 'hidden';
    return (
      <SearchDiv>
        <SearchText
          type='text'
          value={query}
          onChange={this.onUpdateQuery.bind(this)}
        />
        <ClearButton className={`fa ${isHidden}`} onClick={clearQuery} />
        <SearchButton className='fa' disabled={!!isHidden} onClick={this.onClick.bind(this)} />
      </SearchDiv>
    );
  }
}

const mapStateToProps = ({ search }) =>
  ({ query: search.query });

const mapDispatchToProps = dispatch =>
  bindActionCreators({
    getSearchItems,
    searchFavorites,
    updateQuery,
    clearQuery
  }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Search);
