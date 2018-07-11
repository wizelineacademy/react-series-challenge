import appActions from '../actions';

const favoritesReducer = (state = [], action) => {

    const {type, payload} = action;
    const newState = {...state};

    switch (type) {
        case appActions.types.FAVORITES_ADD: {

            const {favorite} = payload;

            newState.push(favorite);

            return newState;
        }
        case appActions.types.FAVORITES_REMOVE: {

            const {favorite} = payload;

            newState.splice(newState.findIndex(
                it => it.id === favorite.id
            ), 1);

            return newState;
        }
        default:
            return state;
    }

};

export default favoritesReducer;