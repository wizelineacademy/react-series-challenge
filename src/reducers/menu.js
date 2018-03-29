import menuActions from '../actions/menu';

const initalState = {
  show: false
};

const menuReducer = (state = initalState, action) => {
    const { type } = action;
    switch (type) {
        case menuActions.types.MENU_TOGGLE:
            return {...state, show: !state.show};
        default:
            return state;
    }
};

export default menuReducer;