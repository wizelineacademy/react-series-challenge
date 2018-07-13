import React from 'react';
import { shallow, render, mount } from "enzyme";
import { Provider } from 'react-redux';

import { mockGif } from "../../mocks";
import initialState from "../../../reducers/initialState";

import ExplorePanel from "../../../components/MainPanel/ExplorePanel";
import SearchBar from '../../../components/MainPanel/SearchBar';

describe('ExplorePanel', () => {
  
  it('ExplorePanel Component should match snapshot (no search)', () => {
    let mockStore = {
      dispatch: jest.fn(),
      getState: jest.fn(() => ({
        ...initialState,
        trendingGifs: [mockGif],
        searchQuery: ''
      })),
      subscribe: jest.fn()
    }
    expect(shallow(<ExplorePanel store={mockStore} />)).toMatchSnapshot();
  });

  it('ExplorePanel Component should match snapshot (WITH search)', () => {
    let mockStore = {
      dispatch: jest.fn(),
      getState: jest.fn(() => ({
        ...initialState,
        searchResults: [mockGif],
        searchQuery: 'a'
      })),
      subscribe: jest.fn()
    }
    expect(shallow(<ExplorePanel store={mockStore} />)).toMatchSnapshot();
  });

  it('Mount should dispatch action to fetch trending gifs', () => {
    let mockStore = {
      dispatch: jest.fn(),
      getState: jest.fn(() => ({
        ...initialState,
        trendingGifs: [mockGif],
        searchQuery: ''
      })),
      subscribe: jest.fn()
    }
    const comp = mount(
      <Provider store={mockStore} >
        <ExplorePanel/>
      </Provider>
    );
    expect(mockStore.dispatch).toHaveBeenCalled();
  });

})
