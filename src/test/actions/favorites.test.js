import actions from '../../actions/favorites';

const { types, creators } = actions;

describe('favorites actions tests', () => {
    test('should create an action to add a favorite', () => {
        const payload = {};
        const expectedAction = {
            type: types.ADD_FAVORITE,
            payload,
        };
        expect(creators.addFavorite(payload)).toEqual(expectedAction);
    });

    test('should create an action to delete a favorite', () => {
        const payload = '';
        const expectedAction = {
            type: types.DELETE_FAVORITE,
            payload,
        };
        expect(creators.deleteFavorite(payload)).toEqual(expectedAction);
    });
});