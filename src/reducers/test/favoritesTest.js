import favorites from "../favorites";
import {toggleFavorite} from "../../actions/favorite";

const mockGif = {
  id: 'p3n7NWvfz3u0c1meay',
  images: {
    original: 'https://media3.giphy.com/media/p3n7NWvfz3u0c1meay/giphy.gif',
    small: 'https://media3.giphy.com/media/p3n7NWvfz3u0c1meay/200w_d.gif'
  }
};
const initialState = {
  filtered: [],
  original: []
};
const withFavorites = {
  filtered: [mockGif],
  original: [mockGif]
};

describe('favorites reducer', () => {
  it('should return initial state', () => {
    expect(favorites(undefined, {})).toEqual(initialState);
  });

  it('should add gif to favorites', function () {
    expect(favorites(initialState, toggleFavorite(mockGif))).toEqual(withFavorites);
  });

  it('should remove gif from favorites', function () {
    expect(favorites(withFavorites, toggleFavorite(mockGif))).toEqual(initialState);
  });
});