import React from 'react';
import { shallow } from 'enzyme';
import { GifList } from 'components/gifList/GifList'
import GifListConnect from 'components/gifList/GifList'
import configureStore from 'redux-mock-store'

describe('GifList', () => {
  let wrapper = shallow(<GifList/>);

  test('renders properly', () => {
    expect(wrapper).toMatchSnapshot()
  });
  
  test('renders properly with connect', () => {
    const initialState = {
      favorite: {}
    }; 
    const mockStore = configureStore();
    let store;
    store = mockStore(initialState)
    let wrapper = shallow(<GifListConnect store={store}/>)
    expect(JSON.stringify(wrapper.props().favorite)).toBe(JSON.stringify({}));
  });
});
