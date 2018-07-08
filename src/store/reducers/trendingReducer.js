import { ACTION_TRENDING_GET_DATA_REQUEST } from "../actions";

export default function(state = {}, action) {
  switch (action.type) {
    case ACTION_TRENDING_GET_DATA_REQUEST:
      console.log(ACTION_TRENDING_GET_DATA_REQUEST + " dispatched... ");
      return {
        ...state,
        [ACTION_TRENDING_GET_DATA_REQUEST]: {
          payload: action.payload,
          status: "sending"
        }
      };
    default:
      return state;
  }
}
