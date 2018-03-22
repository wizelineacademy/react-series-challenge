import React from 'react';
import { shallow } from 'enzyme';
import Favorites from '../../Favorites';

describe.skip('<Favorites />', () => {
  it('Favorites Page must be rendered without crashing', () => {
    const wrapper = shallow(
      <Favorites />
    );
    expect(wrapper.find('Message')).toBeTruthy();
    expect(wrapper.find('SearchGif')).toBeTruthy();
    expect(wrapper.find('GifList')).toBeTruthy();
    expect(wrapper).toMatchSnapshot();
  });
});
