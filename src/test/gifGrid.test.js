import React from 'react';
import { shallow } from 'enzyme';
import GifGrid from '../components/GifGrid'

describe('GifGrid', () => {
  it('matches GifGrid snapshot', () => {
    const wrapper = shallow(
      <GifGrid gifs={[]}/>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
