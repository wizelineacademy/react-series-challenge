import actions from '../../actions/gifList';

const { types, creators } = actions;

describe('gifList actions tests', () => {
    test('should create an action to fetch the trending gifs', () => {
        const expectedAction = {
            type: types.GET_TRENDING_GIFS,
        };
        expect(creators.getTrendingGifs()).toEqual(expectedAction);
    });

    test('should create an action to receive the fetched info', () => {
        const payload = [];
        const expectedAction = {
            type: types.FETCHED_TRENDING_GIFS,
            payload,
        };

        expect(creators.fetchedTrendingGifs(payload)).toEqual(expectedAction);
    });
});