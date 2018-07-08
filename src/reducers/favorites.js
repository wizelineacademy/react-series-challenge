import favoritesActions from '../actions/favorites';

const initialState = {
    favoriteIds: [],
    data: [],
};

const favoritesReducer = (state = initialState, action) => {
    const { type, payload } = action;

    switch (type) {

        case favoritesActions.types.ADD_FAVORITE: {
            const newState = {...state};
            newState.favoriteIds.push(payload);
            return newState;
        }

        case favoritesActions.types.DELETE_FAVORITE: {
            const newState = {...state};
            newState.favoriteIds.splice(newState.favoriteIds.indexOf(payload), 1);
            return newState;
        }

        case favoritesActions.types.FETCHED_FAVORITES_GIFS: {
            const newState = {...state};
            newState.data = payload;
            return newState;
        }

        default:
            return state;
    }
};

export default favoritesReducer;