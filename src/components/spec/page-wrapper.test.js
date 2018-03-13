import React from 'react';
import renderer from 'react-test-renderer';

import { PageWrapper } from '../';

describe('<PageWrapper />', () => {
  test('renders data correctly', () => {
    const tree = renderer.create(<PageWrapper />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
