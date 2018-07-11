import ListGifs from "../components/ListGifs/ListGifs";
import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store'
import React from 'react';

describe('Todo component renders the list of trending gifs', () => {
  const trendingGifs = [
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
  const initialState = { trendingGifs };
  const mockStore = configureStore();
  let store,container;

    beforeEach(()=>{
      store = mockStore(initialState)
      container = shallow(<ListGifs store={store} /> )
    });
    it('should componenet render', () => {
      expect(container.length).toEqual(1)
    });

    it('+++ contains output', () => {
      expect(container.prop('output')).toEqual(initialState.output)
    });

});