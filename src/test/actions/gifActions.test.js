import gifActions from '../../actions/gifActions';
// import favoriteAc from '../../src/actions/favoriteActions';

describe('Test gifActions', () => {
  it('actionCreator: failedSearchGifs', () => {
    expect(gifActions.creators.failedSearchGifs()).toEqual({ type: 'SEARCH_GIFS_FAILED' });
  });

  it('actionCreator: receivedSearchGifs', () => {
    const receivedSearchGifsDefault = gifActions.creators.receivedSearchGifs();
    expect(receivedSearchGifsDefault).toEqual({ type: 'SEARCH_GIFS_RECEIVED', payload: {} })

    const receivedSearchGifs = gifActions.creators.receivedSearchGifs([]);
    expect(receivedSearchGifs).toEqual({ type: 'SEARCH_GIFS_RECEIVED', payload: [] })
  });

  it('actionCreator: searchGifs', () => {
    const searchGifsDefault = gifActions.creators.searchGifs();
    expect(searchGifsDefault).toEqual({ type: 'SEARCH_GIFS_GET', payload: {} })

    const searchGifs = gifActions.creators.searchGifs('dog');
    expect(searchGifs).toEqual({ type: 'SEARCH_GIFS_GET', payload: 'dog' })
  });

  it('actionCreator: failedTrendingGifs', () => {
    expect(gifActions.creators.failedTrendingGifs()).toEqual({ type: 'TRENDING_GIFS_FAILED' });
  });

  it('actionCreator: getTrendingGifs', () => {
    expect(gifActions.creators.getTrendingGifs()).toEqual({ type: 'TRENDING_GIFS_GET' });
  });

  it('actionCreator: receivedTrendingGifs', () => {
    const receivedTrendingGifsDefault = gifActions.creators.receivedTrendingGifs();
    expect(receivedTrendingGifsDefault).toEqual({ type: 'TRENDING_GIFS_RECEIVED', payload: {} })

    const receivedTrendingGifs = gifActions.creators.receivedTrendingGifs([]);
    expect(receivedTrendingGifs).toEqual({ type: 'TRENDING_GIFS_RECEIVED', payload: [] })
  });
});
