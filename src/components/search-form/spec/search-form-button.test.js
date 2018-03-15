import React from 'react';
import renderer from 'react-test-renderer';

import { SearchButton } from '../';

describe('<SearchButton />', () => {
  test('renders data correctly', () => {
    const tree = renderer.create(<SearchButton />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
