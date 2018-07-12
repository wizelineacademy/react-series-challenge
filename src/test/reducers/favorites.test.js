import reducer from '../../reducers/favorites';
import actions from '../../actions/favorites';

const { types } = actions;

describe('favorites reducers tests', () => {
    test('should return the initial state', () => {
        expect(reducer(undefined, {})).toEqual({
            data: {},
        });
    });

    test('should return a object with the payload added to the "data" property', () => {
        const payload = {
            gif: {
                id: 1,
                image: 'testImage.jpg',
            },
        };
        expect(reducer({}, { type: types.ADD_FAVORITE, payload }))
            .toEqual({
                data: {
                    1: {
                        id: 1,
                        image: 'testImage.jpg',
                    },
                },
            });
    });

    test('should return a object with the id passed through by the payload deleted from the "data" property', () => {
        const payload = 1;
        const mockState = {
            data: {
                1: {
                    id: 1,
                    image: 'testImage.jpg',
                },
                2: {
                    id: 2,
                    image: 'testImage2.jpg',
                },
            },
        };
        expect(reducer(mockState, { type: types.DELETE_FAVORITE, payload }))
            .toEqual({
                data: {
                    2: {
                        id: 2,
                        image: 'testImage2.jpg',
                    },
                },
            });
    });
});