
/**
 * @jest-environment node
 */
import favorites from '../favorites'
import search from '../search'
import trending from '../trending'

describe('FavoritesActions', () => {
  it('should setFavorite default', () => {
    const payload = {}
    expect(favorites.creators.setFavorite()).toEqual(
      {type: favorites.types.SET_FAVORITE, payload}
    )
  });
  it('should REQUEST_SEARCH_GIFS default', () => {
    const payload = {}
    expect(search.creators.requestSearchGifs()).toEqual(
      {type: search.types.REQUEST_SEARCH_GIFS, payload}
    )
  })
  it('should REQUEST_SEARCH_GIFS_SUCCESS default', () => {
    const payload = {}
    expect(search.creators.requestSearchGifsSuccess()).toEqual(
      {type: search.types.REQUEST_SEARCH_GIFS_SUCCESS, payload}
    )
  })
  it('should REQUEST_SEARCH_GIFS_FAIL default', () => {
    const payload = {}
    expect(search.creators.requestSearchGifsFail()).toEqual(
      {type: search.types.REQUEST_SEARCH_GIFS_FAIL, payload}
    )
  })
  it('should SEARCH_FAVS default', () => {
    const payload = {}
    expect(search.creators.searchFavs()).toEqual(
      {type: search.types.SEARCH_FAVS, payload}
    )
  })
  it('should SEARCH_FAVS_SUCCESS default', () => {
    const payload = {}
    expect(search.creators.searchFavsSuccess()).toEqual(
      {type: search.types.SEARCH_FAVS_SUCCESS, payload}
    )
  })
  it('should SEARCH_GIF default', () => {
    const payload = {}
    expect(search.creators.searchGif()).toEqual(
      {type: search.types.SEARCH_GIF, payload}
    )
  })
  it('should SEARCH_GIF_SUCCESS default', () => {
    const payload = {}
    expect(search.creators.searchGifSuccess()).toEqual(
      {type: search.types.SEARCH_GIF_SUCCESS, payload}
    )
  })
  it('should requestTrendingGifsSuccess default', () => {
    const payload = {}
    expect(trending.creators.requestTrendingGifsSuccess()).toEqual(
      {type: trending.types.REQUEST_TRENDING_GIFS_SUCCESS, payload}
    )
  })
  it('should requestTrendingGifsFail default', () => {
    const payload = {}
    expect(trending.creators.requestTrendingGifsFail()).toEqual(
      {type: trending.types.REQUEST_TRENDING_GIFS_FAIL, payload}
    )
  })
});
