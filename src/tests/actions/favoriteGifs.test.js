import favoriteGifsActions from '../../actions/favoriteGifs';

const { types, creators } = favoriteGifsActions;
const gif = { id: "123456" };
const testGif = { id: "123456" };
const searchTerm = 'something';
const testSearchTerm = 'something';


describe('Favorite Gifs Actions', () => {

    it('should pass a gif, at least with id, to add it to favorites', () => {
        const expectedAction = {
            type: types.FAVORITE_GIFS_ADD,
            payload: { gif }
        };
        expect(creators.addFavoriteGif({gif: testGif})).toEqual(expectedAction);
    });

    it('should return an empty object', () => {
        const expectedAction = {
            type: types.FAVORITE_GIFS_ADD,
            payload: { }
        };
        expect(creators.addFavoriteGif()).toEqual(expectedAction);
    });

    it('should pass a gif, at least with id, to remove it from favorites', () => {
        const expectedAction = {
            type: types.FAVORITE_GIFS_DELETE,
            payload: { gif }
        };
        expect(creators.deleteFavoriteGif({gif: testGif})).toEqual(expectedAction);
    });

    it('should return an empty object', () => {
        const expectedAction = {
            type: types.FAVORITE_GIFS_DELETE,
            payload: { }
        };
        expect(creators.deleteFavoriteGif()).toEqual(expectedAction);
    });

    it('should a search term to filter from the favorite gifs', () => {
        const expectedAction = {
            type: types.FAVORITE_GIFS_FILTER,
            payload: searchTerm
        };
        expect(creators.filterFavoriteGifs(testSearchTerm)).toEqual(expectedAction);
    });

    it('should return an empty object', () => {
        const expectedAction = {
            type: types.FAVORITE_GIFS_FILTER,
            payload: {  }
        };
        expect(creators.filterFavoriteGifs()).toEqual(expectedAction);
    });

});