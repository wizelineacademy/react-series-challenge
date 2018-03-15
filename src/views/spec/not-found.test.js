import React from 'react';
import renderer from 'react-test-renderer';

import { NotFound } from '../';

describe('<NotFound />', () => {
  test('renders data correctly', () => {
    const tree = renderer.create(<NotFound />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
