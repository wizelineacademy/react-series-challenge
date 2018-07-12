import gifReducer from '../../reducers/gifReducer';
import * as types from '../../constants/actionTypes';

const initialState = {
    gifs: [],
    loading: true,
};

describe('Gif reducer test', () => {
    test('Should equals initial state', () => {
        expect(gifReducer(undefined, {})).toEqual(initialState);
    });

    test('Should fetch gifs trending', () => {
        expect(gifReducer(initialState, {
            type: types.GIFS_TRENDING_FETCHED,
        })).toEqual({ gifs: [], loading: true });
    });

    test('Should fetch gifs trending', () => {
        expect(gifReducer(initialState, {
            type: types.GIFS_SEARCH_FETCHED,
        })).toEqual({ gifs: [], loading: true });
    });

    test('Should get gifs trending or search', () => {
        expect(gifReducer(initialState, {
            type: types.GIFS_TRENDING_GET,
            gifs: [{ id: '010101', title: 'myGif', images: {} }, { id: '010102', title: 'myGif2', images: {} }, { id: '010103', title: 'myGif3', images: {} }]
        })).toEqual({
            gifs: [{ id: '010101', title: 'myGif', images: {} }, { id: '010102', title: 'myGif2', images: {} }, { id: '010103', title: 'myGif3', images: {} }],
            loading: false
        });
    });
});

