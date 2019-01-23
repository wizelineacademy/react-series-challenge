import {LOAD_All_GIFS, FETCH_ALL_GIFS, loadAllGifs, fetchAllGifs} from '../../actions/allGifs';

describe('All gifs  Actions', () => {
    const testElement = {elements: {testKey:{id:'20012'}}};

    it('pass a gif object, key: gifid, value:gifObj', () => {
        const expectAction = {
            type    : FETCH_ALL_GIFS,
            payload : {elements: { testKey: { id: expect.stringMatching(/[\s\S]*/) } }}
        };

        expect(fetchAllGifs(testElement)).toEqual(expectAction);
    });

    it('recive the action in order to fetch the data using saga', () => {
        const expectedAction = {
            type    : LOAD_All_GIFS,
            payload : {}
        };

        expect(loadAllGifs({})).toEqual(expectedAction);
    });
});