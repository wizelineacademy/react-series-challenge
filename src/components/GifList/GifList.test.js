import React from 'react';
import { shallow, render } from 'enzyme';
import { shallowToJson, renderToJson } from 'enzyme-to-json';
import GifListConnected, { GifList } from "./GifList";
import {MemoryRouter} from "react-router-dom";
import configureStore from "redux-mock-store";

describe('Gif list component', () => {
  it('should render correctly', () => {
    const output = shallow(
      <GifList
        gifs={[]}
        addGif={jest.fn}
        removeGif={jest.fn}
        favoritesGifs={{allGifs: {}}}
      />
    );
    expect(shallowToJson(output)).toMatchSnapshot();
  });
  it('should mark one gif as favorited', () => {
    const gifs = [{id: '123', title: 'test'}];
    const favoritedGifs = {'123': {id: '123', title: 'test'}};
    const output = render(
      <MemoryRouter>
        <GifList
          gifs={gifs}
          addGif={jest.fn}
          removeGif={jest.fn}
          favoritesGifs={{allGifs: favoritedGifs}}
        />
      </MemoryRouter>
    );
    expect(renderToJson(output)).toMatchSnapshot();
  });
  it('should render component connected', () => {
    const initialState = { allGifs: {}, filtered: {} };
    const mockStore = configureStore();
    const store = mockStore(initialState);
    const output = shallow(
      <GifListConnected
        store={store}
      />
    );
    expect(shallowToJson(output)).toMatchSnapshot();
  });
});