import searchActions from '../searchValues';

describe('Search Actions', () => {
    test('checks type ', () => {
        expect(searchActions.creators.searchedSpecifiedGifs(undefined, {})).toEqual({type: searchActions.types.SEARCH_SPECIFIED_GIFS});
    });

    test('checks type ', () => {
        expect(searchActions.creators.addRemoveGifFavorites(undefined, {})).toEqual({type: searchActions.types.ADD_REMOVE_GIF});
    });

    test('checks type ', () => {
        expect(searchActions.creators.updateSearchValue(undefined, {})).toEqual({type: searchActions.types.SEARCH_UPDATE_VALUE});
    });

    test('checks type ', () => {
        expect(searchActions.creators.getTrendingGifs(undefined, {})).toEqual({type: searchActions.types.GET_TRENDING});
    });

    test('checks type ', () => {
        expect(searchActions.creators.requestApiData(undefined, {})).toEqual({payload: {}, type: searchActions.types.REQUEST_API_DATA});
    });

    test('checks type ', () => {
        expect(searchActions.creators.requestApiDataSearched(undefined, {})).toEqual({payload: {}, type: searchActions.types.REQUEST_API_DATA_SEARCHED});
    });
});