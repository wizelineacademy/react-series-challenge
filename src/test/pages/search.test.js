import React from 'react';
import { mount, shallow } from 'enzyme';
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import Search from '../../pages/Search'
import gifData from '../data/gifTestData'
import configureStore from 'redux-mock-store'

const mockStore = configureStore()
const initialState = {
  favoriteGifs: [],
  trendingGifs: [
    gifData
  ]
}

describe('SearchPage', () => {
  let wrapper

  beforeAll(() => {
    wrapper = shallow(
      <Search store={mockStore(initialState)}/>
    );
  })

  it('matches GifTile snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('renders the search input', () => {
    const component = mount(
      <BrowserRouter>
        <Provider store={mockStore(initialState)}>
          <Search match={{ params: {query: 'dog'}}}/>
        </Provider>
      </BrowserRouter>
    )

    expect(component.find('input').length).toBe(1)
  })

});
