import favoriteGifsActions from '../actions/favoriteGifs';

const initialState = {};

const favoriteGifsReducer = (state = initialState, action) => {

    const { type, payload } = action;

    switch (type) {

        case favoriteGifsActions.types.FAVORITE_GIFS_ADD: {
            const newState = { ...state };
            const { gif } = payload;
            newState[gif.id] = gif;
            return newState;
        }

        case favoriteGifsActions.types.FAVORITE_GIFS_DELETE: {
            const {gif} = payload;
            const newState = {...state};
            delete newState[gif.id];
            return newState;
        }

        default:
            return state;
    }
};

export default favoriteGifsReducer;
