import {ADD_ITEM, LOAD_FAV_GIFS, SEARCH_FAV_GIFS, addItem, loadFavGifs, searchFavGifs} from '../../actions/favGifs';

describe('All gifs  Actions', () => {
    const gif = { id: "123456" };
    const testGif = { id: "123456" };
    const searchsString= 'string';
    const testsearchsString = 'string';

    it('pass a gif object, and add it to favGifs state', () => {
        const expectAction = {
            type    : ADD_ITEM,
            payload : {gif}
        };

        expect(addItem({gif: testGif})).toEqual(expectAction);
    });

    it('TODO:recive the action and load the fav gifs using saga', () => {
        const expectedAction = {
            type    : LOAD_FAV_GIFS,
            payload : {}
        };

        expect(loadFavGifs({})).toEqual(expectedAction);
    });

    it('recive a string and search it on title property of favGifs', () => {
        const expectedAction = {
            type    : SEARCH_FAV_GIFS,
            payload : searchsString
        };

        expect(searchFavGifs(testsearchsString)).toEqual(expectedAction);
    });
});