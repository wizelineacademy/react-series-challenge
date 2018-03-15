import trending from "../trending";
import {fetchTrendingGifsOk} from "../../actions/trending";

const mockFetchedGifs = [
  {
    id: 'p3n7NWvfz3u0c1meay',
    images: {
      original: 'https://media3.giphy.com/media/p3n7NWvfz3u0c1meay/giphy.gif',
      small: 'https://media3.giphy.com/media/p3n7NWvfz3u0c1meay/200w_d.gif'
    }
  }
];

describe('trending reducer', () => {
  it('should return initial state', () => {
    expect(trending(undefined, {})).toEqual([]);
  });

  it('should return fetched gifs', () => {
    expect(trending([], fetchTrendingGifsOk(mockFetchedGifs))).toEqual(mockFetchedGifs);
  });
});
