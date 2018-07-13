import React from 'react';
import { shallow, render, mount } from "enzyme";
import { Provider } from 'react-redux';

import { mockGif } from "../../mocks";
import initialState from "../../../reducers/initialState";

import FavoritesPanel from "../../../components/MainPanel/FavoritesPanel";
import StyledSearchBar from '../../../components/styled/SearchBar.styled';

describe('FavoritesPanel', () => {
  
  it('FavoritesPanel Component should match snapshot (WITHOUT filter)', () => {
    const mockStore = {
      dispatch: jest.fn(),
      getState: jest.fn(() => ({
        ...initialState,
        favorites: [mockGif]
      })),
      subscribe: jest.fn()
    }
    expect(shallow(<FavoritesPanel store={mockStore} />)).toMatchSnapshot();
  });

  it('FavoritesPanel Component should match snapshot (WITH filter)', () => {
    const mockStore = {
      dispatch: jest.fn(),
      getState: jest.fn(() => ({
        ...initialState,
        favorites: [mockGif],
        filterFavorites: 't'
      })),
      subscribe: jest.fn()
    }
    expect(render(
      <Provider store={mockStore} >
        <FavoritesPanel/>
      </Provider>
    )).toMatchSnapshot();
  });

  it('Input change should dispatch action', () => {
    const mockStore = {
      dispatch: jest.fn(),
      getState: jest.fn(() => ({
        ...initialState,
        favorites: [mockGif]
      })),
      subscribe: jest.fn()
    }
    const comp = mount(
      <Provider store={mockStore} >
        <FavoritesPanel/>
      </Provider>
    );
    comp.find(StyledSearchBar).simulate('change');
    expect(mockStore.dispatch).toHaveBeenCalled();
  });

})
