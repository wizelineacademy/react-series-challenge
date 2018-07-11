import gifsFavorites from '../../reducers/gifsFavorites';
import * as types from '../../constants/actionTypes';

const initialState = {
    favorites: [],
    textFilter: '',
};

const gif = { id: '01010101', title: 'my gif', images: { fixed_height_downsampled: { url: 'http://www.zyzyzy', width: '100px', height: '100' } } };

describe('Reducer gifs favorites test', () => {

    test('Should equals initial state', () => {
        expect(gifsFavorites(undefined, {})).toEqual(initialState);
    });

    test('Should add gif', () => {
        expect(gifsFavorites(initialState, {
            type: types.GIF_FAVORITE_ADD,
            gif: gif
        })).toEqual({ favorites: [gif], textFilter: '' });
    });

    test('Should remove gif', () => {
        initialState.favorites = [gif];
        expect(gifsFavorites(initialState, {
            type: types.GIF_FAVORITE_REMOVE,
            gif: gif,
        })).toEqual({ favorites: [], textFilter: '' });
    });

    test('Should search gif', () => {
        initialState.favorites = [gif];
        expect(gifsFavorites(initialState, {
            type: types.GIF_UPDATE_TEXT_FILTER,
            searchQuery: 'gif',
        })).toEqual({ favorites: [gif], textFilter: 'gif' });
    });
});