import React from 'react';
import View from '../../View';

describe.skip('<View />', () => {
  it('View Page must be rendered without crashing', () => {
    const wrapper = shallow(
      <View />
    );
    expect(wrapper.find('Message')).toBeTruthy();
    expect(wrapper.find('Image')).toBeTruthy();
    expect(wrapper).toMatchSnapshot();
  });
});
