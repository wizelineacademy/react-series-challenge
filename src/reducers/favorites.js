import appActions from '../actions';

const favoritesReducer = (state = [], action) => {

    const {type, payload} = action;
    const newState = [...state];

    switch (type) {
        case appActions.types.FAVORITES_ADD:

            newState.push(payload);

            return newState;

        case appActions.types.FAVORITES_REMOVE:

            newState.splice(newState.findIndex(
                it => it.id === payload.id
            ), 1);

            return newState;

        default:
            return state;
    }

};

export default favoritesReducer;