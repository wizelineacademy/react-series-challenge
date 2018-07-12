import favsReducer from "../favsReducer";
import { ACTION_SET_TO_FAV, FAVORITES, ACTION_FAV_DELETE } from "../../actions";

const DEFAULT_GIPHY_STATE = {};

describe("favs reducer", () => {
  it("should return the initial state", () => {
    expect(favsReducer(undefined, {})).toEqual(DEFAULT_GIPHY_STATE);
  });

  it("should handle ACTION_SET_TO_FAV", () => {
    function stateBefore() {
      return {
        FAVORITES: {},
        status: "sending"
      };
    }

    const action = {
      type: ACTION_SET_TO_FAV,
      payload: {
        "1": {}
      }
    };

    const actual = favsReducer(stateBefore, action);

    const expected = {
      FAVORITES: { undefined: { "1": {} } },
      status: "sending"
    };
    expect(actual).toEqual(expected);
  });

  it("should handle ACTION_FAV_DELETE", () => {
    function stateBefore() {
      return {
        favs: {
          FAVORITES: {
            1: {}
          }
        }
      };
    }

    const action = {
      type: ACTION_FAV_DELETE,
      payload: {
        1: {}
      }
    };

    const actual = favsReducer(stateBefore, action);

    const expected = {
      [FAVORITES]: {},
      status: "sending"
    };
    expect(actual).toEqual(expected);
  });
});
