import React from 'react';
import { shallow } from 'enzyme';
import Search from '../../pages/Search'
import gifData from '../data/gifTestData'
import configureStore from 'redux-mock-store'

const mockStore = configureStore()
const initialState = {
  trendingGifs: [
    { id: gifData.id }
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

});
