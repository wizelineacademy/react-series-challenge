import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
  getSearchItems,
  searchFavorites,
  updateQuery,
  clearQuery
} from '../actions';
import SearchText from './styled/SearchText';
import SearchButton from './styled/SearchButton';
import SearchDiv from './styled/SearchDiv';

class Search extends Component {
  onClick() {
    const {
      getSearchItems,
      searchFavorites,
      query,
      isFavorites
    } = this.props;

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
    const { query } = this.props;
    return (
      <SearchDiv>
        <SearchText
          type='text'
          value={query}
          onChange={this.onUpdateQuery.bind(this)}
        />
        <SearchButton className='fa' onClick={this.onClick.bind(this)} />
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
