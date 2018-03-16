import React from 'react';
import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store'
import Details from '../../pages/Details'
import gifData from '../data/gifTestData'

const mockStore = configureStore()
const initialState = {
  singleGif: gifData
}

describe('Details', () => {
  let wrapper

  beforeAll(() => {
    wrapper = shallow(
      <Details store={mockStore(initialState)}/>
    );
  })

  it('matches GifTile snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

});
