import favoriteGifsActions from '../actions/favoriteGifs';

const initialState = {
    filtered: {},
    favs: {}
};

const favoriteGifsReducer = (state = initialState, action) => {

    const { type, payload } = action;

    switch (type) {

        case favoriteGifsActions.types.FAVORITE_GIFS_ADD: {
            const newState = { ...state };
            const { gif } = payload;
            newState['favs'][gif.id] = gif;
            return newState;
        }

        case favoriteGifsActions.types.FAVORITE_GIFS_DELETE: {
            const { gif } = payload;
            const newState = {...state};
            delete newState['favs'][gif.id];
            return newState;
        }

        case favoriteGifsActions.types.FAVORITE_GIFS_FILTER: {
            const filterTerm = payload;
            const newState = { ...state };
            newState['filtered'] = {};
            Object.keys(newState['favs']).forEach((gifId) => {
                const { title } = newState['favs'][gifId];
                if (title.includes(filterTerm)) {
                    newState['filtered'][gifId] = newState['favs'][gifId];
                }
            });
            return newState;
        }

        default:
            return state;
    }
};

export default favoriteGifsReducer;
