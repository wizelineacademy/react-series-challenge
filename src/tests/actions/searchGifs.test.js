import searchGifsActions from '../../actions/searchGifs';

const { types, creators } = searchGifsActions;

describe('Favorite Gifs Actions', () => {
    it('should pass a gif, at least with id, to add it to favorites', () => {
        const expectedAction = {
            type: types.SEARCH_GIFS_LOAD,
            payload: {}
        };
        expect(creators.loadSearchGifs()).toEqual(expectedAction);
    });
});