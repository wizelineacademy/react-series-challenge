import favoritesGifs from './favoritesGifs';

describe('favorites gifs actions', () => {
  it('should create an action add a gif', () => {
    const gif = { id: 1, name: '', url: '' };
    const expectedAction = {
      type: favoritesGifs.types.ADD_GIF,
      payload: gif
    };
    expect(favoritesGifs.creators.addGif(gif))
      .toEqual(expectedAction);
  });
  it('should create an action to remove a gif by id', () => {
    const gifId = '123';
    const expectedAction = {
      type: favoritesGifs.types.REMOVE_GIF,
      payload: gifId
    };
    expect(favoritesGifs.creators.removeGif(gifId))
      .toEqual(expectedAction);
  });
  it('should create an action to filter favorite gifs by a word', () => {
    const term = 'f1';
    const expectedAction = {
      type: favoritesGifs.types.FILTER_GIFS,
      payload: term
    };
    expect(favoritesGifs.creators.filterGifs(term))
      .toEqual(expectedAction);
  });
  it('should create an action to clear the filtered gifs', () => {
    const expectedAction = {
      type: favoritesGifs.types.FILTER_GIFS_CLEAR,
    };
    expect(favoritesGifs.creators.filterGifsClear())
      .toEqual(expectedAction);
  });
});