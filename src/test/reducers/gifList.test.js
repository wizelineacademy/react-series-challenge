import reducer from '../../reducers/gifList';
import actions from '../../actions/gifList';

const { types } = actions;

describe('gifList reducers tests', () => {
    test('should return the initial state', () => {
        expect(reducer(undefined, {})).toEqual({
            data: [],
        });
    });

    test('should return a object equal to the payload', () => {
        expect(reducer({}, { type: types.FETCHED_TRENDING_GIFS, payload: { data: [] } })).toEqual({
            data: [],
        });
    })
});