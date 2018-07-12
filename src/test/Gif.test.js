import React from 'react';
import { shallow } from 'enzyme';
import { Gif, bgColor } from 'components/gif/Gif'
import GifConnect from 'components/gif/Gif'
import configureStore from 'redux-mock-store'
import 'jest-styled-components'
import toJSON from 'enzyme-to-json'

describe('Gif', () => {
  test('renders properly', () => {
    let wrapper = shallow(<Gif></Gif>)
    expect(toJSON(wrapper)).toMatchSnapshot();
  });

  test('receives onClick prop', () => {
    const mockClick = jest.fn();
    let wrapper = shallow(<Gif onClick={mockClick}/>)
    wrapper.simulate(
      'click'
    )
    expect(mockClick).toHaveBeenCalled();
  });

  test('receives title prop', () => {
    const initialState = {}; 
    const mockStore = configureStore();
    let wrapper;
    let store;
    store = mockStore(initialState)
    wrapper = shallow(<GifConnect store={store}/>)
    wrapper.setProps({ title: 'Mock Title' });
    expect(wrapper.prop('title')).toBe('Mock Title');
  });

  test('receives id prop', () => {
    const initialState = {}; 
    const mockStore = configureStore();
    let wrapper;
    let store;
    store = mockStore(initialState)
    wrapper = shallow(<GifConnect store={store}/>)
    wrapper.setProps({ id: 'Mock ID' });
    expect(wrapper.prop('id')).toBe('Mock ID');
  });
  
  test('renders properly with connect', () => {
    const initialState = {
      favorite: {}
    }; 
    const mockStore = configureStore();
    let store;
    store = mockStore(initialState)
    let wrapper = shallow(<GifConnect store={store}/>)
    expect(JSON.stringify(wrapper.props().favorite)).toBe(JSON.stringify({}));
  });

  test('generate hex value', () => {
    const seed = 1;
    let hex = bgColor(seed);
    expect(hex).toBe('#ffffff');
  })
});
