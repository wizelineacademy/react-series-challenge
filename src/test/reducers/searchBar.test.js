import reducer from '../../reducers/searchBar';
import actions from '../../actions/searchBar';

const { types } = actions;

describe('searchBar reducers tests', () => {
    test('should return the initial state', () => {
        expect(reducer(undefined, {})).toEqual({
            value: '',
        });
    });

    test('should return a object with the property "value" equal to the payload', () => {
        expect(reducer({}, { type: types.SEARCH_BAR_INPUT, payload: 'Test' })).toEqual({
            value: 'Test',
        });
    })
});