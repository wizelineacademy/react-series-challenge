import {
  ACTION_TRENDING_GET_DATA_REQUEST,
  ACTION_TRENDING_GET_DATA_RESPONSE,
  ACTION_SEARCH_TERM_GET_DATA_RESPONSE
} from "../actions";

export default function(state = {}, action) {
  switch (action.type) {
    case ACTION_TRENDING_GET_DATA_REQUEST:
      return {
        ...state,
        [ACTION_TRENDING_GET_DATA_REQUEST]: {
          payload: action.payload,
          status: "sending"
        }
      };
    case ACTION_TRENDING_GET_DATA_RESPONSE:
      return {
        ...state,
        [ACTION_TRENDING_GET_DATA_RESPONSE]: {
          payload: action.payload,
          status: "done"
        }
      };
    case ACTION_SEARCH_TERM_GET_DATA_RESPONSE:
      return {
        ...state,
        [ACTION_TRENDING_GET_DATA_RESPONSE]: {
          payload: action.payload,
          status: "done"
        }
      };
    default:
      return state;
  }
}
