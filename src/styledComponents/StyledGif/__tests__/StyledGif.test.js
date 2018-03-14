import React from 'react';
import { shallow } from 'enzyme';
import StyledGif from '../../StyledGif';

describe('<StyledGif />', () => {
  it('StyledGif must be rendered without crashing', () => {
    const wrapper = shallow(
      <StyledGif />
    );
    expect(wrapper.is('div')).toBeTruthy();
    expect(wrapper).toMatchSnapshot();
  });
});
