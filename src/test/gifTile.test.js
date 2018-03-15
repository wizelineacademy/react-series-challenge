import React from 'react';
import { shallow } from 'enzyme';
import GifTile from '../components/GifTile'
import gifData from './data/gifTestData'
import configureStore from 'redux-mock-store'

const mockStore = configureStore()
const initialState = {
  favoriteGifs: [
    { id: gifData.id }
  ]
}

describe('GifTile', () => {
  let wrapper

  beforeAll(() => {
    wrapper = shallow(
      <GifTile gif={gifData} store={mockStore(initialState)}/>
    );
  })

  it('matches GifTile snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('shows as favorite when matches the store', () => {
    expect(wrapper.prop('isFavorite')(gifData.id)).toBe(true)
  });

  it('doesn\'t shows as favorite when it doesn\'t match the store', () => {
    wrapper = shallow(
      <GifTile gif={gifData} store={mockStore({
        favoriteGifs: []
      })}/>
    );
    expect(wrapper.prop('isFavorite')(gifData.id)).toBe(false)
  });
});
