import PropTypes from 'prop-types';
import React, { Component } from 'react';

// Styles
import { SearchBarContainer, SearchBarBox } from './SearchBarStyles';

class SearchBar extends Component {
  render() {
    const { onChange } = this.props;
    return (
      <SearchBarContainer>
        <SearchBarBox onChange={onChange} placeholder={'Search Gif'} />
      </SearchBarContainer>
    );
  }
}

SearchBar.propTypes = {
  onChange: PropTypes.func
};

export default SearchBar;
