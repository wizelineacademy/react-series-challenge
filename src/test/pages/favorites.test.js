import React from 'react';
import { mount, shallow } from 'enzyme';
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import Favorites from '../../pages/Favorites'
import gifData from '../data/gifTestData'
import configureStore from 'redux-mock-store'

const mockStore = configureStore()
const initialState = {
  favoriteGifs: [
    gifData
  ]
}

describe('Favorites', () => {
  let wrapper

  beforeAll(() => {
    wrapper = shallow(
      <BrowserRouter>
        <Provider store={mockStore(initialState)}>
            <Favorites/>
        </Provider>
      </BrowserRouter>
    );
  })

  it('matches GifTile snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('renders the search input', () => {
    const component = mount(
      <BrowserRouter>
        <Provider store={mockStore(initialState)}>
            <Favorites/>
        </Provider>
      </BrowserRouter>
    )

    expect(component.find('input').length).toBe(1)
  })

});
