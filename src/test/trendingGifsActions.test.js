import actions from '../actions/trendingGifs';
import dataSource from './__mocks/completeFavoritesDataSource';
const {creators, types} = actions;

describe ('Trendind Gifs Actions', () => {
  it('getTrendingGifsRequested', () => {
    const { pagination } = dataSource

    const expectedAction = {
      type: types.GET_TRENDING_GIFS_REQUESTED,
      payload: {pagination}
    };
    expect(creators.getTrendingGifsRequested(pagination)).toEqual(expectedAction);
  });

  it('getTrendingGifsCompleted', () => {
    const {data: gifs} = dataSource;
    const expectedAction = {
      type: types.GET_TRENDING_GIFS_COMPLETED,
      payload: {gifs},
    };
    expect(creators.getTrendingGifsCompleted(gifs)).toEqual(expectedAction);
  });

  it('getTrendingGifsFailed', () => {
    const error = 'Testing getFavoriteGifsFailed error action';
    const expectedAction = {
      type: types.GET_TRENDING_GIFS_FAILED,
      error,
    };
    expect(creators.getTrendingGifsFailed(error)).toEqual(expectedAction);
  });


  it('getGifRequested', () => {
    const {id: gifID} = dataSource.data[0];
    const expectedAction = {
      type: types.GET_GIF_REQUESTED,
      payload: {gifID}
    };
    expect(creators.getGifRequested(gifID)).toEqual(expectedAction);
  });

  it('getGifCompleted', () => {
    const [gif] = dataSource.data;
    const expectedAction = {
      type: types.GET_GIF_COMPLETED,
      payload: {gif},
    };
    expect(creators.getGifCompleted(gif)).toEqual(expectedAction);
  });

  it('getGifFailed', () => {
    const error = 'Testing getGifFailed error action';
    const expectedAction = {
      type: types.GET_GIF_FAILED,
      error,
    };
    expect(creators.getGifFailed(error)).toEqual(expectedAction);
  });

  it('added2Favorites', () => {
    const {id: gifID} = dataSource.data[0];
    const expectedAction = {
      type: types.ADDED_TO_FAVORITES_GIF,
      payload: {gifID}
    };
    expect(creators.added2Favorites(gifID)).toEqual(expectedAction);
  });

  it('removed2Favorites', () => {
    const {id: gifID} = dataSource.data[0];
    const expectedAction = {
      type: types.REMOVED_TO_FAVORITES_GIF,
      payload: {gifID}
    };
    expect(creators.removed2Favorites(gifID)).toEqual(expectedAction);
  });
});