import {
  isTrendingLoading,
  getTrendingGifs
} from '../../selectors/trending';

const trending = {
  loading: false,
  gifs: [
    { id: 1 },
    { id: 2 }
  ]
}

const state = {
  trending
};

describe('trending selectors', () => {
  describe('isTrendingLoading', () => {
    it('should say if trending gifs are loading', () => {
      expect(isTrendingLoading(state)).toEqual(trending.loading);
    });
  });

  describe('getTrendingGifs', () => {
    it('should return trending gifs', () => {
      expect(getTrendingGifs(state)).toEqual(trending.gifs);
    });
  });
});
