import { call } from "redux-saga/effects";
import { sagaTrendingGetDataRequest } from "../trendingSagas";
import GiphyApiService from "../../../services/api/giphyApi";

describe("sagaTrendingGetDataRequest test", () => {
  test("Should get trending gifs", () => {
    const trendingSaga = sagaTrendingGetDataRequest().next().value;
    expect(trendingSaga).toEqual(call(GiphyApiService.getTrendingDataRequest));
  });
});
