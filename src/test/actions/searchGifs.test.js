import {LOAD_SEARCH_GIFS, FETCH_SEARCH_GIFS, loadSearchGifs, fetchSearchGifs} from '../../actions/searchGifs';

describe('All gifs  Actions', () => {
    const testElement = {elements: {testKey:{id:'20012'}}};

    it('pass a gif object, key: gifid, value:gifObj', () => {
        const expectAction = {
            type    : LOAD_SEARCH_GIFS,
            payload : {elements: { testKey: { id: expect.stringMatching(/[\s\S]*/) } }}
        };

        expect(loadSearchGifs(testElement)).toEqual(expectAction);
    });

    it('recive the action in order to fetch the data using saga', () => {
        const expectedAction = {
            type    : FETCH_SEARCH_GIFS,
            payload : {}
        };

        expect(fetchSearchGifs({})).toEqual(expectedAction);
    });
});