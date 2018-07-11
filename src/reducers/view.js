import appActions from '../actions';

const viewReducer = (state = appActions.enums.viewType.SEARCH, action) => {

    const {type, payload} = action;

    switch (type) {
        case appActions.types.SET_VIEW:
            return payload.view;
        default:
            return state;
    }

};

export default viewReducer;