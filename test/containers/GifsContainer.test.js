import React from 'react';
import configureStore from 'redux-mock-store';
import renderer from 'react-test-renderer';
import 'jest-styled-components';
import { Provider } from 'react-redux';
import { MemoryRouter as Router } from 'react-router-dom';
import GifsContainer from '../../src/containers/GifsContainer';


const IMAGE_URL = 'https://i.ytimg.com/vi/m5d1FlSeF-M/maxresdefault.jpg';
const IMAGE_ID = 'some_id';
const IMAGE_TITLE = 'some_title';

describe('GifsContainer', () => {
  let props, initialState, mockStore;
  beforeEach(() => {
    props = {
      match: {
        params: {}
      }
    };
    initialState = {
      giphyReducer: {
        data: [
          {
            images: { original: { url: IMAGE_URL } },
            id: IMAGE_ID,
            title: IMAGE_TITLE,
            rating: 'n',
          }
        ],
        searchTerm: null,
        pagination: {},
        filteredFavorites: [],
      },
      customReducer: {
        favorites: [],
      }
    }; 
    mockStore = configureStore();
  });
  it('should render correctly', () => {
    const store = mockStore(initialState);
    const tree = renderer
    .create(
      <Provider store={store}><Router><GifsContainer {...props}/></Router></Provider>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should render correctly when isSingleView', () => {
    const store = mockStore(initialState);
    props.match.params.gif_id = 'some_id'

    const tree = renderer
    .create(
      <Provider store={store}><Router><GifsContainer {...props}/></Router></Provider>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});