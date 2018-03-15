/**
 * @jest-environment node
 */

import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import GifItem from '..';

const props = {
  isFavorite: true,
  gif: {
    title:'title',
    images: {
      fixed_width_downsampled: {
        url: 'test'
      }
    }
  },
  setFavorite: jest.fn(),
  history: {
    push: jest.fn()
  }
}

describe('GifItem', () => {
  it('should render correctly', () => {
    const output = shallow(
      <GifItem  {...props}/>
    );
    expect(shallowToJson(output)).toMatchSnapshot();
  });
  it('should be defined', () => {
   expect(GifItem).toBeDefined();
  });
  it('should have an image', () => {
    const wrapper = shallow(<GifItem.WrappedComponent {...props} />)
    wrapper.find('img').simulate('click')
    expect(props.history.push).toHaveBeenCalled();
  });
});
