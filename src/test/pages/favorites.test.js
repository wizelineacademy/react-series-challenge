import React from 'react';
import { shallow } from 'enzyme';
import Favorites from '../../pages/Favorites'
import gifData from '../data/gifTestData'
import configureStore from 'redux-mock-store'

const mockStore = configureStore()
const initialState = {
  favoriteGifs: [
    { id: gifData.id }
  ]
}

describe('Favorites', () => {
  let wrapper

  beforeAll(() => {
    wrapper = shallow(
      <Favorites store={mockStore(initialState)}/>
    );
  })

  it('matches GifTile snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

});
