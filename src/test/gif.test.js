import gifDetails, {reducer} from '../reducers/gif';
import mockedState from './mockedState';

describe('Gif Reducer', () => {

  it('Should add a gif to the favorites list', () => {
    const mockedGifArray = mockedState.gifs.displayed;
    const newState =
      reducer(undefined, gifDetails.actions.markFavorite(true, mockedGifArray[0]));
    expect(newState.favorites).toHaveLength(1);
  });

  it('Should remove a gif to the favorites list', () => {
    const mockedGifArray = mockedState.gifs.displayed;
    let newState =
      reducer(undefined, gifDetails.actions.markFavorite(true, mockedGifArray[0]));
    expect(newState.favorites).toHaveLength(1);
    newState =
      reducer(newState, gifDetails.actions.markFavorite(false, mockedGifArray[0]));
    expect(newState.favorites).toHaveLength(0);
  });

  it('Should update the gif fetching flag to true by trending request', () => {
    const newState = reducer(undefined, gifDetails.actions.trendingFetchRequested());
    expect(newState.fetching).toBe(true);
  });

  it('Should update the gif fetching flag by trending fetch failed', () => {
    const newState = reducer(undefined, gifDetails.actions.trendingFetchFailed());
    expect(newState.fetching).toBe(false);
  });

  it('Should update the gif search flag to true by search request', () => {
    const newState = reducer(undefined, gifDetails.actions.searchFetchRequested());
    expect(newState.fetching).toBe(true);
  });

  it('Should update the gif fetching flag by search fetch failed', () => {
    const newState = reducer(undefined, gifDetails.actions.searchFetchFailed());
    expect(newState.fetching).toBe(false);
  });

  it('Should update the gif search flag and displayed gif list by search success', () => {
    const mockedGifArray = mockedState.gifs.displayed;
    const newState =
      reducer(undefined, gifDetails.actions.trendingFetchSucceeded(mockedGifArray));
    expect(newState.fetching).toBe(false);
    expect(newState.displayed.length).toBeGreaterThanOrEqual(1);
  });

  it('Should update search fecth gifs', () => {
    const mockedGifArray = mockedState.gifs.displayed;
    const newState =
      reducer(null, gifDetails.actions.searchFetchSucceeded(mockedGifArray));
    expect(newState.displayed.length).toBeGreaterThanOrEqual(1);
  });

  it('Should update the favorites text search filter', () => {
    const favoritesText = "favoritesText";
    const newState =
      reducer(null, gifDetails.actions.updateFavoritesTextFilter(favoritesText));
    expect(newState.favoritesTextFilter).toEqual(favoritesText);
  });
});
