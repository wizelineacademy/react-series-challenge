import React from 'react';
import pathNames from '../../routes'
import { 
  Wrapper,
  NavLink,
} from './Menu.Styled';

export const Menu = () =>
  <Wrapper>
    <NavLink exact to={pathNames.HOME_PATH} activeClassName={'active'} >Home</NavLink>
    <NavLink to={`${pathNames.TRENDING_PATH}`} activeClassName={'active'} >Trending</NavLink>
    <NavLink to={`${pathNames.SEARCH_PATH}`} activeClassName={'active'} >Search</NavLink>
    <NavLink to={`${pathNames.FAVORITE_PATH}`} activeClassName={'active'} >Favorites</NavLink>
  </Wrapper>