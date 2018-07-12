import React from 'react';
import { shallow, render } from 'enzyme';
import { Home } from 'components/home/Home'
import HomeConnect from 'components/home/Home'
import configureStore from 'redux-mock-store'

describe('Home', () => {
  let wrapper = render(<Home/>)

  test('renders properly', () => {
    expect(wrapper).toMatchSnapshot()
  });

  test('renders properly with trending prop', () => {
    const initialState = {
      trending: {}
    }; 
    const mockStore = configureStore();
    let store;
    store = mockStore(initialState)
    let wrapper = shallow(<HomeConnect store={store}/>)
    wrapper.setProps({ trending: {}})
    expect(wrapper).toMatchSnapshot()
  });
  
  test('renders properly with connected trending', () => {
    const initialState = {
      trending: {}
    }; 
    const mockStore = configureStore();
    let store;
    store = mockStore(initialState)
    let wrapper = shallow(<HomeConnect store={store}/>)
    expect(JSON.stringify(wrapper.props().trending)).toBe(JSON.stringify({}));
  });
  
  test('renders properly with connected search', () => {
    const initialState = {
      search: {}
    }; 
    const mockStore = configureStore();
    let store;
    store = mockStore(initialState)
    let wrapper = shallow(<HomeConnect store={store}/>)
    expect(JSON.stringify(wrapper.props().search)).toBe(JSON.stringify({}));
  });
});
