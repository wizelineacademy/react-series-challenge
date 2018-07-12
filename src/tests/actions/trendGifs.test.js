import trendGifsActions from '../../actions/trendGifs';

const { types, creators } = trendGifsActions;

describe('Favorite Gifs Actions', () => {

    const testGif = { gifs: { somekey: { id: "123456" }} };
    const testError = { error: 'Lorem ipsum' };


    it('should pass a gifs object, with the gif ID as key and the gif itself as value (at least with id)', () => {
        const expectedAction = {
            type: types.TREND_GIFS_FETCHED,
            payload: { gifs: { somekey: { id: expect.stringMatching(/[\s\S]*/) } } }
            // payload: { gifs: { [expect.stringMatching(/[\s\S]*/)]: { id: expect.stringMatching(/[\s\S]*/) } } }
        };

        expect(creators.fetchedTrendGifs(testGif)).toEqual(expectedAction);
    });

    it('should return an empty object', () => {
        const expectedAction = {
            type: types.TREND_GIFS_FETCHED,
            payload: { }
        };

        expect(creators.fetchedTrendGifs()).toEqual(expectedAction);
    });


    it('should pass an error string if fetch trend gifs fails', () => {
        const expectedAction = {
            type: types.TREND_GIFS_FAILED,
            payload: { error: expect.stringMatching(/[\s\S]*/) }
        };

        expect(creators.failedFetchTrendGifs(testError)).toEqual(expectedAction);
    });

    it('should return an empty object', () => {
        const expectedAction = {
            type: types.TREND_GIFS_FAILED,
            payload: { }
        };

        expect(creators.failedFetchTrendGifs()).toEqual(expectedAction);
    });


    it('should receive only the action, with payload as empty object', () => {
        const expectedAction = {
            type: types.TREND_GIFS_LOAD,
            payload: { value: 1 }
        };

        expect(creators.loadTrendGifs({ value: 1 })).toEqual(expectedAction);
    });

    it('should return an empty object', () => {
        const expectedAction = {
            type: types.TREND_GIFS_LOAD,
            payload: {}
        };

        expect(creators.loadTrendGifs()).toEqual(expectedAction);
    });
});