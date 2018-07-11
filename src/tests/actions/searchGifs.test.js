import searchGifsActions from '../../actions/searchGifs';

const { types, creators } = searchGifsActions;

describe('Favorite Gifs Actions', () => {

    const testGif = { gifs: { somekey: { id: "123456" }} };
    const testError = { error: 'Lorem ipsum' };
    const testSearchTerm = 'something';

    it('should pass a search term to fetch queried gifs', () => {
        const expectedAction = {
            type: types.SEARCH_GIFS_LOAD,
            payload: expect.stringMatching(/[\s\S]*/)
        };
        expect(creators.loadSearchGifs(testSearchTerm)).toEqual(expectedAction);
    });

    it('should pass a gifs object, with the gif ID as key and the gif itself as value (at least with id)', () => {
        const expectedAction = {
            type: types.SEARCH_GIFS_FETCHED,
            payload: { gifs: { somekey: { id: expect.stringMatching(/[\s\S]*/) } } }
            // payload: { gifs: { [expect.stringMatching(/[\s\S]*/)]: { id: expect.stringMatching(/[\s\S]*/) } } }
        };

        expect(creators.fetchedSearchGifs(testGif)).toEqual(expectedAction);
    });


    it('should pass an error string if fetch search gifs fails', () => {
        const expectedAction = {
            type: types.SEARCH_GIFS_FAILED,
            payload: { error: expect.stringMatching(/[\s\S]*/) }
        };

        expect(creators.failedFetchSearchGifs(testError)).toEqual(expectedAction);
    });
});