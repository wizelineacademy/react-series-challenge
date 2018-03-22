import React from 'react';
import { shallow } from 'enzyme';
import Home from '../../Home';

describe.skip('<Home />', () => {
  it('Home Page must be rendered without crashing', () => {
    const wrapper = shallow(
      <Home />
    );
    expect(wrapper.find('Message')).toBeTruthy();
    expect(wrapper.find('SearchGif')).toBeTruthy();
    expect(wrapper.find('GifList')).toBeTruthy();
    expect(wrapper).toMatchSnapshot();
  });
});
