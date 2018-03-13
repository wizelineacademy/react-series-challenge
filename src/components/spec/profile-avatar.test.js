import React from 'react';
import renderer from 'react-test-renderer';

import { ProfileAvatar } from '../';

describe('<ProfileAvatar />', () => {
  test('renders data correctly', () => {
    const tree = renderer.create(<ProfileAvatar />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
