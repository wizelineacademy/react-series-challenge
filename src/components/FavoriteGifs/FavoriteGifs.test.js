import FavoriteGifs from "./FavoriteGifs";
import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store'
import React from 'react';

describe('Todo component renders the list of trending gifs', () => {
  const favoriteGifs = [
    {
      id: "01", 
      images: { 
        preview_webp: { 
          url: "https://media0.giphy.com/media/4TgL0taO3uU5H6kKcQ/giphy-preview.webp" 
        }
      }
    }, 
    {
      id: "02", 
      images: { 
        preview_webp: { 
          url: "https://media0.giphy.com/media/4TgL0taO3uU5H6kKcQ/giphy-preview.webp" 
        }
      }
    }];
  const initialState = { favoriteGifs, searchFavoriteGifs: null };
  const mockStore = configureStore();
  let store,container;

    beforeEach(()=>{
      store = mockStore(initialState)
      container = shallow(<FavoriteGifs store={store} /> )
    });
    it('+++ render the DUMB component', () => {
      expect(container.length).toEqual(1)
    });

    it('+++ contains output', () => {
      expect(container.prop('output')).toEqual(initialState.output)
    });

});