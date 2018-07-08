import * as actions from "../actions";

export default function gift(state = 0, action) {
    switch (action.type) {
        case actions.GET_TRENDING_GIF:
            return state;
        case actions.GET_TRENDING_GIF_SUCCESS:
            return state;
        case actions.GET_TRENDING_GIF_FAILED:
            return state;
        default:
            return state;
    }
}
  