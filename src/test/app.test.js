import React from 'react';
import { mount, shallow } from 'enzyme';
import App from '../App';
import gifData from './data/gifTestData'
import configureStore from 'redux-mock-store'
import { shallowToJson } from 'enzyme-to-json';
import { Provider } from 'react-redux'

const mockStore = configureStore()
const initialState = {
  trendingGifs: [
    gifData
  ],
  favoriteGifs: [],
  error: '',
  loading: false,
  singleGif: null
}

describe('App', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<App store={mockStore(initialState)} />)
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });

  it('mounts correctly', () => {
    const wrapper = mount(
      <Provider store={mockStore(initialState)}>
        <App/>
      </Provider>
    )
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
})
