import { getTrendingData } from "../trendingSelectors";
import data from "./mocks/data.json";

describe("trendingSelectors", () => {
  it("should not fail with undefined", () => {
    const actual = getTrendingData();

    const expected = [];
    expect(actual).toEqual(expected);
  });

  it("should not fail with undefined payload", () => {
    const state = {
      ACTION_TRENDING_GET_DATA_RESPONSE: {
        payload: undefined
      }
    };

    const actual = getTrendingData(state);

    const expected = [];
    expect(actual).toEqual(expected);
  });

  it("should not fail with undefined data", () => {
    const state = {
      ACTION_TRENDING_GET_DATA_RESPONSE: {
        payload: {
          data: undefined
        }
      }
    };

    const actual = getTrendingData(state);

    const expected = [];
    expect(actual).toEqual(expected);
  });

  it("should get trending data", () => {
    const actual = getTrendingData(data);

    const expected = [];
    expect(actual).toEqual(expected);
  });
});
