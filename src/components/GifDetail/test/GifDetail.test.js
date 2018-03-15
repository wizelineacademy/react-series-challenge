/**
 * @jest-environment node
 */

import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import GifDetail from '..';
const props = {
  isFavorite: true,
  gif: {
    title:'title',
    images: {
      downsized_large: {
        url: 'test'
      }
    }
  },
  searchGif: jest.fn(),
  setFavorite: jest.fn(),
  history: {
    goBack: jest.fn()
  },
  match: {
    params: {
      id: 1
    }
  }
}

describe('GifDetail', () => {
  it('should render correctly', () => {
    const output = shallow(
      <GifDetail.WrappedComponent {...props} />
    );
    expect(shallowToJson(output)).toMatchSnapshot();
  });
  it('should be defined', () => {
   expect(GifDetail).toBeDefined();
  });
  it('should render div when no gif', () => {
    const wrapper = shallow(<GifDetail.WrappedComponent {...props} gif={{}} />)
    expect(wrapper.find('div').length).toBe(1)
  });
  it('should call back history', () => {
    const wrapper = shallow(<GifDetail.WrappedComponent {...props} />)
    wrapper.find('BackButton').simulate('click')
    expect(props.history.goBack).toHaveBeenCalled();
  });
});
