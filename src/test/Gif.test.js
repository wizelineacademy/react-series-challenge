import React from 'react';
import { shallow, mount } from 'enzyme';
import { Gif } from 'components/gif/Gif'
import GifConnect from 'components/gif/Gif'
import configureStore from 'redux-mock-store'

describe('Gif', () => {

  test('renders properly', () => {
    let wrapper = shallow(<Gif></Gif>)
    expect(wrapper).toMatchSnapshot();
  });

  test('receives onClick prop', () => {
    let wrapper = shallow(<Gif></Gif>)
    const mockClick = jest.fn();
    wrapper.setProps({ onClick: mockClick });
    wrapper.find('.gif').simulate(
      'click'
    )
    expect(mockClick.mock.calls.length).toBe(1);
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
});
