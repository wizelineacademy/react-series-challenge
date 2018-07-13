import React from 'react';
import { shallow, render } from 'enzyme';

import GifListView from '../../components/styled/GifListView.styled';
import GifView from '../../components/styled/GifView.styled';
import NavBar, { StyledNavLink } from '../../components/styled/NavBar.styled';
import SearchBar from '../../components/styled/SearchBar.styled';
import Star from '../../components/styled/Star.styled';

describe('Styled components', () => {

  it('GifListView should match snapshot', () => {
    expect(shallow(<GifListView />)).toMatchSnapshot();
  });

  it('GifView should match snapshot', () => {
    expect(shallow(<GifView />)).toMatchSnapshot();
  });

  it('NavBar should match snapshot', () => {
    expect(shallow(<NavBar />)).toMatchSnapshot();
  });

  it('SearchBar should match snapshot', () => {
    expect(shallow(<SearchBar />)).toMatchSnapshot();
  });

  it('Star should match snapshot', () => {
    expect(shallow(<Star />)).toMatchSnapshot();
  });

  it('StyledNavLink should match snapshot', () => {
    expect(shallow(<StyledNavLink />)).toMatchSnapshot();
  });

});