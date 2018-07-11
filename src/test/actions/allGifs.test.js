import allGifs from '../../actions/allGifs';

const {LOAD_All_GIFS, FETCH_ALL_GIFS, loadAllGifs, fetchAllGifs} = allGifs;

describe('All gifs  Actions', () => {
    const testElement = {elements: {testKey:{id:'20012'}}};
    const testError   = {error:'Failure'};

    it('pass a gif object, key: gifid, value:gifObj', () => {
        const expectAction = {
            type    : FETCH_ALL_GIFS,
            payload : {elements:{testKey:{id: expect.stringMatching(/[\s\S]*/)}}}
        };

        expect(fetchAllGifs(testElement)).toEqual(expectAction);
    });

    it('recive the action in order to fetch the data using saga', () => {
        const expectedAction = {
            type    : LOAD_All_GIFS,
            payload : {}
        };

        expect(loadAllGifs()).toEqual(expectedAction);
    });
});