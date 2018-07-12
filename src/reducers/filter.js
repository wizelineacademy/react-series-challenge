import appActions from '../actions';

const filterReducer = (state = '', action) => {

    const {type, payload} = action;

    switch (type) {
        case appActions.types.UPDATE_FILTER:
            console.log(action);
            return payload;
        default:
            return state;
    }

};

export default filterReducer;