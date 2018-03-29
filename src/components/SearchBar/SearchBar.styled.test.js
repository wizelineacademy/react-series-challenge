import React from 'react';
import {SearchInput, SearchButton} from './SearchBar.styled';
import renderer from 'react-test-renderer';

describe('SearchBar styled components', () => {
  it('SearchInput renders correctly', () => {
    const tree = renderer
      .create(<SearchInput />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('SearchButton container renders correctly', () => {
    const tree = renderer
      .create(<SearchButton>Button</SearchButton>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
