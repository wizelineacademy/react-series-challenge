import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import NavBar from './NarBar';

jest.mock('react-router-dom', () => ({
  Link: ({ children, ...rest }) => (<a href="#a" {...rest}>{children}</a>),
}));

describe('NavBar component', () => {
  let links = null;

  beforeEach(() => {
    links = [
      { url: '/a', isActive: false, text: 'a' },
      { url: '/b', isActive: true, text: 'b' },
    ];
  });

  it('render as teh snapshot says', () => {
    const tree = renderer.create((
      <NavBar links={links} type="text" />
    )).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
