import React from 'react';
import Image from '../../Image';

describe('<Image />', () => {
  it('Image must be rendered without crashing', () => {
    const wrapper = shallow(
      <Image size="100px" />
    );
    expect(wrapper.is('img')).toBeTruthy();
    expect(wrapper).toMatchSnapshot();
  });
});
