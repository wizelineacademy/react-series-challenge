import React from 'react';
import renderer from 'react-test-renderer';

import { SearchFormWrapper } from '../';

describe('<SearchFormWrapper />', () => {
  test('renders data correctly', () => {
    const tree = renderer.create(<SearchFormWrapper />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
