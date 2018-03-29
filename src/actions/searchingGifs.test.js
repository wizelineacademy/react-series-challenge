import searchingGifs from './searchingGifs';

describe('searching gifs actions', () => {
  it('should create an action to search gifs by a term', () => {
    const term = 'f1';
    const expectedAction = {
      type: searchingGifs.types.SEARCH_GIFS_REQUESTED,
      payload: term
    };
    expect(searchingGifs.creators.searchGifsRequested(term))
      .toEqual(expectedAction);
  });
  it('should create an action to save the resulting gifs', () => {
    const gifs = [{ name: '', url: '' }, { name: '', url: '' }];
    const expectedAction = {
      type: searchingGifs.types.SEARCH_GIFS_COMPLETED,
      payload: gifs
    };
    expect(searchingGifs.creators.searchGifsCompleted(gifs))
      .toEqual(expectedAction);
  });
  it('should create an action specify an error when searching gifs', () => {
    const err = { statusCode: 400, message: 'Bad request' };
    const expectedAction = {
      type: searchingGifs.types.SEARCH_GIFS_FAILED,
      payload: err
    };
    expect(searchingGifs.creators.searchGifsFailed(err))
      .toEqual(expectedAction);
  });
  it('should create an action to clear the found gifs', () => {
    const expectedAction = {
      type: searchingGifs.types.SEARCH_GIFS_CLEAR,
    };
    expect(searchingGifs.creators.searchGifsClear())
      .toEqual(expectedAction);
  });
});