import React from 'react';
import { mount, shallow } from 'enzyme';
import configureStore from 'redux-mock-store'
import Details from '../../pages/Details'
import gifData from '../data/gifTestData'

const mockStore = configureStore()
const initialState = {
  loading: false,
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

  it('is not empty when having correct props', () => {
    expect(wrapper.html()).toBeDefined()
  });

  it('doesn\'t render if loading', () => {
    const component = mount(
      <Details match={{ params: {id: gifData.id}}} store={mockStore({loading: true, singleGif: gifData})}/>
    );
    expect(component.html()).toBeNull()
  })

  it('doesn\'t render if no singleGif data', () => {
    const component = mount(
      <Details match={{ params: {id: gifData.id}}} store={mockStore({loading: false, singleGif: null})}/>
    );
    expect(component.html()).toBeNull()
  })

});
