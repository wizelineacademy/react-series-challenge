import actions from '../../actions/searchBar';

const { types, creators } = actions;

describe('searchBar actions tests', () => {
    test('should create an action to modify the value of the search bar', () => {
        const payload = '';
        const expectedAction = {
            type: types.SEARCH_BAR_INPUT,
            payload,
        };
        expect(creators.searchBarInput(payload)).toEqual(expectedAction);
    });
});