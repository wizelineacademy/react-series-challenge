import React from 'react';
import renderer from 'react-test-renderer';

import { SearchInput } from '../';

describe('<SearchInput />', () => {
  test('renders data correctly', () => {
    const tree = renderer.create(<SearchInput />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
