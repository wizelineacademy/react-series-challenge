import favoriteGifsActions from '../actions/favoriteGifs';

const initialState = {
    filtered: {},
    favs: {}
};

const favoriteGifsReducer = (state = initialState, action) => {

    const { type, payload } = action;

    switch (type) {

        case favoriteGifsActions.types.FAVORITE_GIFS_ADD: {
            let { favs, filtered } = state;
            const { gif } = payload;
            favs[gif.id] = gif;
            favs = { ...favs };
            filtered = { ...filtered };
            return { favs, filtered };
        }

        case favoriteGifsActions.types.FAVORITE_GIFS_DELETE: {
            const { gif } = payload;
            let { favs, filtered } = state;
            delete favs[gif.id];
            delete filtered[gif.id];
            favs = { ...favs };
            filtered = { ...filtered };
            return { favs, filtered };
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
