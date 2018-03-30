import React from 'react';
import {Menu, MenuItem} from './Header.styled';
import renderer from 'react-test-renderer';

describe('Header styled components', () => {
  it('menu renders correctly', () => {
    const tree = renderer
      .create(<Menu>Child</Menu>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('menu item container renders correctly', () => {
    const tree = renderer
      .create(<MenuItem>Child</MenuItem>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
