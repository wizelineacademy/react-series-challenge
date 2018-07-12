import React from 'react';
import { shallow } from 'enzyme';
import LikeStatus from 'components/likeStatus/LikeStatus'
import 'jest-styled-components'

describe('LikeStatus', () => {
  test('renders properly', () => {
    const component = shallow(<LikeStatus />);
    expect(component).toMatchSnapshot()
  })
});
