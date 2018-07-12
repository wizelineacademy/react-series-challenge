import favGifStorage from "../../middlewares/favGifStorage";
import favoriteGifsActions from '../../actions/favoriteGifs';

const create = () => {
    const store = {
        getState: jest.fn(() => ({})),
        dispatch: jest.fn(),
    };
    const next = jest.fn();
    const invoke = (action) => favGifStorage(store)(next)(action);
    return {store, next, invoke}
};

const { FAVORITE_GIFS_ADD, FAVORITE_GIFS_DELETE } = favoriteGifsActions.types;

beforeAll(() => {
    global.localStorage = {
        getItem: function (any = null) {
            return JSON.stringify({"9Y1KGBP9bz0NPKgm0C":"9Y1KGBP9bz0NPKgm0C"});
        },
        setItem: function(any = null) {
            return true;
        },
    };
});

it('test action add favorite gif', () => {
    const { next, invoke } = create();
    const action = {type: FAVORITE_GIFS_ADD, payload: { gif: { id: '9Y1KGBP9bz0NPKgm0C', isFavorite: true }}};
    invoke(action);
    expect(next).toHaveBeenCalledWith(action)
});

it('test action delete favorite gif', () => {
    const { next, invoke } = create();
    const action = {type: FAVORITE_GIFS_DELETE, payload: { gif: { id: '9Y1KGBP9bz0NPKgm0C' }}};
    invoke(action);
    expect(next).toHaveBeenCalledWith(action)
});

