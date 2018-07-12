import trendingReducer from "../trendingReducer";
import {
  ACTION_TRENDING_GET_DATA_REQUEST,
  ACTION_TRENDING_GET_DATA_RESPONSE,
  ACTION_SEARCH_TERM_GET_DATA_RESPONSE
} from "../../actions";

const DEFAULT_GIPHY_STATE = {};

describe("team reducer", () => {
  it("should return the initial state", () => {
    expect(trendingReducer(undefined, {})).toEqual(DEFAULT_GIPHY_STATE);
  });

  it("should handle ACTION_TRENDING_GET_DATA_RESPONSE", () => {
    function stateBefore() {
      return {};
    }

    const action = {
      type: ACTION_TRENDING_GET_DATA_RESPONSE,
      payload: {}
    };

    const actual = trendingReducer(stateBefore, action);

    const expected = {
      [ACTION_TRENDING_GET_DATA_RESPONSE]: {
        payload: action.payload,
        status: "done"
      }
    };
    expect(actual).toEqual(expected);
  });

  it("should handle ACTION_TRENDING_GET_DATA_REQUEST", () => {
    function stateBefore() {
      return {};
    }

    const action = {
      type: ACTION_TRENDING_GET_DATA_REQUEST,
      payload: {}
    };

    const actual = trendingReducer(stateBefore, action);

    const expected = {
      [ACTION_TRENDING_GET_DATA_REQUEST]: {
        payload: action.payload,
        status: "sending"
      }
    };
    expect(actual).toEqual(expected);
  });

  it("should handle ACTION_SEARCH_TERM_GET_DATA_RESPONSE", () => {
    function stateBefore() {
      return {};
    }

    const action = {
      type: ACTION_SEARCH_TERM_GET_DATA_RESPONSE,
      payload: {}
    };

    const actual = trendingReducer(stateBefore, action);

    const expected = {
      [ACTION_TRENDING_GET_DATA_RESPONSE]: {
        payload: action.payload,
        status: "done"
      }
    };
    expect(actual).toEqual(expected);
  });
});
