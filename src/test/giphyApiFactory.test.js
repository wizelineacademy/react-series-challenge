import create, {TRENDING_TYPE, SEARCH_TYPE} from '../utils/giphyApiFactory';

describe('GiphyAPIFactory', () => {

  it('Should dispatch a trending fetch', () => {
    const trendingFecth = create(TRENDING_TYPE);
    expect(trendingFecth).not.toBe(null);
  });

  it('Should dispatch a search fetch', () => {
    const trendingFecth = create(SEARCH_TYPE, {search: 'test Text'});
    expect(trendingFecth).not.toBe(null);
  });

  it('Should dispatch a search fetch without search text', () => {
    const trendingFecth = create(SEARCH_TYPE, {});
    expect(trendingFecth).not.toBe(null);
  });

  it ('Should no create any', () => {
    const emptyFecth = create();
    expect(emptyFecth).not.toBe(null);
  })
});
