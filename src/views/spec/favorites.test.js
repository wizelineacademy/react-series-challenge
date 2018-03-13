import React from 'react';
import renderer from 'react-test-renderer';

import { Favorites } from '../';

describe('<Favorites />', () => {
  test('renders data correctly', () => {
    const tree = renderer.create(<Favorites />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
