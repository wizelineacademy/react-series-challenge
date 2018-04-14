import actions from '../actions/favoriteGifs';
import dataSource from './__mocks/completeFavoritesDataSource';
const {creators, types} = actions;

describe ('Favorite Gifs Actions', () => {
  it('getFavoriteGifsRequested', () => {
    const { pagination } = dataSource

    const expectedAction = {
      type: types.GET_FAVORITE_GIFS_REQUESTED,
      payload: {pagination}
    };
    expect(creators.getFavoriteGifsRequested(pagination)).toEqual(expectedAction);
  });

  it('getFavoriteGifsCompleted', () => {
    const {data: gifs} = dataSource;
    const expectedAction = {
      type: types.GET_FAVORITE_GIFS_COMPLETED,
      payload: {gifs},
    };
    expect(creators.getFavoriteGifsCompleted(gifs)).toEqual(expectedAction);
  });

  it('getFavoriteGifsFailed', () => {
    const error = 'Testing getFavoriteGifsFailed error action';
    const expectedAction = {
      type: types.GET_FAVORITE_GIFS_FAILED,
      error,
    };
    expect(creators.getFavoriteGifsFailed(error)).toEqual(expectedAction);
  });


  it('addFavoriteGifRequested', () => {
    const [gif] = dataSource.data;
    const expectedAction = {
      type: types.ADD_FAVORITE_GIF_REQUESTED,
      payload: {gif}
    };
    expect(creators.addFavoriteGifRequested(gif)).toEqual(expectedAction);
  });

  it('addFavoriteGifCompleted', () => {
    const [gif] = dataSource.data;
    const expectedAction = {
      type: types.ADD_FAVORITE_GIF_COMPLETED,
      payload: {gif},
    };
    expect(creators.addFavoriteGifCompleted(gif)).toEqual(expectedAction);
  });

  it('addFavoriteGifFailed', () => {
    const error = 'Testing addFavoriteGifFailed error action';
    const expectedAction = {
      type: types.ADD_FAVORITE_GIF_FAILED,
      error,
    };
    expect(creators.addFavoriteGifFailed(error)).toEqual(expectedAction);
  });


  it('removeFavoriteGifRequested', () => {
    const {id: gifID} = dataSource.data[0];
    const expectedAction = {
      type: types.REMOVE_FAVORITE_GIF_REQUESTED,
      payload: {gifID}
    };
    expect(creators.removeFavoriteGifRequested(gifID)).toEqual(expectedAction);
  });

  it('removeFavoriteGifCompleted', () => {
    const {id: gifID} = dataSource.data[0];
    const expectedAction = {
      type: types.REMOVE_FAVORITE_GIF_COMPLETED,
      payload: {gifID},
    };
    expect(creators.removeFavoriteGifCompleted(gifID)).toEqual(expectedAction);
  });

  it('removeFavoriteGifFailed', () => {
    const error = 'Testing removeFavoriteGifFailed error action';
    const expectedAction = {
      type: types.REMOVE_FAVORITE_GIF_FAILED,
      error,
    };
    expect(creators.removeFavoriteGifFailed(error)).toEqual(expectedAction);
  });
});