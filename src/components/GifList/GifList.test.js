import React from 'react';
import { shallow, render } from 'enzyme';
import { shallowToJson, renderToJson } from 'enzyme-to-json';
import { GifList } from "./GifList";
import {MemoryRouter} from "react-router-dom";

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
});