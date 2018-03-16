import React from 'react';
import { mount, shallow } from 'enzyme';
import GifTile from '../../components/GifTile'
import gifData from '../data/gifTestData'
import configureStore from 'redux-mock-store'
import { BrowserRouter } from 'react-router-dom'

const mockStore = configureStore()
const initialState = {
  favoriteGifs: [
    { id: gifData.id }
  ]
}

describe('GifTile', () => {
  let wrapper
  let component

  beforeAll(() => {
    wrapper = shallow(
      <GifTile data={gifData} store={mockStore(initialState)}/>
    );

    component = mount(
      <BrowserRouter>
        <GifTile data={gifData} store={mockStore(initialState)}/>
      </BrowserRouter>
    );
  })

  it('matches GifTile snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('shows as favorite when matches the store', () => {
    expect(wrapper.prop('isFavorite')(gifData.id)).toBe(true)
  });

  it('shows and hides button on hover', () => {
    expect(component.find('button').length).toBe(0)

    component.simulate('mouseover')
    component.update()

    expect(component.find('button').length).toBe(1)

    component.simulate('mouseleave')
    component.update()

    expect(component.find('button').length).toBe(0)
  });

  it('click remove from favorites', () => {
    expect(component.find('button').length).toBe(0)
    component.simulate('mouseover')
    component.update()
    component.find('button').simulate('click')
    component.update()
  });

  it('click add to favorite', () => {
    const notFavComponent = mount(
      <BrowserRouter>
        <GifTile data={gifData} store={mockStore({ favoriteGifs: [] })}/>
      </BrowserRouter>
    );
    expect(notFavComponent.find('button').length).toBe(0)
    notFavComponent.simulate('mouseover')
    notFavComponent.update()
    notFavComponent.find('button').simulate('click')
    notFavComponent.update()
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
