import React from 'react';
import NotFound from '../../NotFound';

describe.skip('<NotFound />', () => {
  it('NotFound Page must be rendered without crashing', () => {
    const wrapper = shallow(
      <NotFound />
    );
    expect(wrapper.find('Message')).toBeTruthy();
    expect(wrapper.find('Image')).toBeTruthy();
    expect(wrapper).toMatchSnapshot();
  });
});
