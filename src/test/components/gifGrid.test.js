import React from 'react';
import { shallow } from 'enzyme';
import GifGrid from '../../components/GifGrid'
import { shallowToJson } from 'enzyme-to-json';

describe('GifGrid', () => {
  it('matches GifGrid snapshot', () => {
    const wrapper = shallow(
      <GifGrid gifs={[]}/>
    );
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
});
