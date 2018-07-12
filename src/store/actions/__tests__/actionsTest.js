import {
  ACTION_TRENDING_GET_DATA_REQUEST,
  ACTION_TRENDING_GET_DATA_RESPONSE,
  ACTION_SET_TO_FAV,
  ACTION_FAV_DELETE,
  ACTION_SEARCH_TERM_GET_DATA_REQUEST,
  ACTION_SEARCH_TERM_GET_DATA_RESPONSE,
  actionTrendingGetDataRequest,
  actionTrendingGetDataResponse,
  actionSetToFav,
  actionFavDelete,
  actionSearchTermGetDataRequest,
  actionSearchTermGetDataResponse
} from "../index";

describe("actionTrendingGetDataRequest", () => {
  it("should return expected action", () => {
    expect(actionTrendingGetDataRequest()).toEqual({
      type: ACTION_TRENDING_GET_DATA_REQUEST
    });
  });
});

describe("actionTrendingGetDataResponse", () => {
  it("should return expected action", () => {
    expect(actionTrendingGetDataResponse()).toEqual({
      type: ACTION_TRENDING_GET_DATA_RESPONSE
    });
  });
});

describe("actionSetToFav", () => {
  it("should return expected action", () => {
    expect(actionSetToFav()).toEqual({
      type: ACTION_SET_TO_FAV
    });
  });
});

describe("actionFavDelete", () => {
  it("should return expected action", () => {
    expect(actionFavDelete()).toEqual({
      type: ACTION_FAV_DELETE
    });
  });
});

describe("actionSearchTermGetDataRequest", () => {
  it("should return expected action", () => {
    expect(actionSearchTermGetDataRequest()).toEqual({
      type: ACTION_SEARCH_TERM_GET_DATA_REQUEST
    });
  });
});

describe("actionSearchTermGetDataResponse", () => {
  it("should return expected action", () => {
    expect(actionSearchTermGetDataResponse()).toEqual({
      type: ACTION_SEARCH_TERM_GET_DATA_RESPONSE
    });
  });
});
