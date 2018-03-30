import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Components
import { MainMenu, SearchBar } from '../';

// Styles
import { HeaderStyled } from './HeaderStyles';

const menuData = [
  {
    section: 'home',
    path: '/'
  },
  {
    section: 'favorites',
    path: '/favorites'
  }
];

class Header extends Component {
  render() {
    const { searchFunction } = this.props;
    return (
      <HeaderStyled>
        <MainMenu menuData={menuData} {...this.props} />
        <SearchBar onChange={searchFunction} />
      </HeaderStyled>
    );
  }
}

Header.propTypes = {
  searchFunction: PropTypes.func.isRequired
};

export default Header;
