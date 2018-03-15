import React from 'react';
import {Detail} from "../index";
import {shallow} from "enzyme";
import {GifCard} from "../../GifCard";

const paramGifId = {params: {id: 'p3n7NWvfz3u0c1meay'}};
const emptyFavorites = {
  original: [],
  filtered: []
};
const emptyTrending = [];
const mockGif = {
  id: 'p3n7NWvfz3u0c1meay',
  images: {
    original: 'https://media3.giphy.com/media/p3n7NWvfz3u0c1meay/giphy.gif',
    small: 'https://media3.giphy.com/media/p3n7NWvfz3u0c1meay/200w_d.gif'
  }
};
const mockFavorites = {
  original: [mockGif],
  filtered: [mockGif]
};

describe('Detail component', () => {
  const func = jest.fn();
  it('should render component', () => {
    const component = shallow(
      <Detail trending={emptyTrending} favorites={emptyFavorites} match={paramGifId}/>
    );
    expect(component.contains(
      <GifCard
        gif={mockGif}
        isFavorite={true}
        isDetailBtnVisible={false}
        imageSize={'original'}
        toggleFavorite={func}
      />
    )).toEqual(false);
  });

  it('should render component', () => {
    const component = shallow(
      <Detail trending={emptyTrending} favorites={mockFavorites} match={paramGifId}/>
    );
    expect(component).toHaveLength(1);
  });
});