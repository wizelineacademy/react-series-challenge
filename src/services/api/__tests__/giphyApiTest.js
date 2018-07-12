import GiphyApiService from "../giphyApi";

it("getTrendingDataRequest should return response body", done => {
  fetch.mockResponseOnce(JSON.stringify({ id: "test" }), {
    status: 200,
    statusText: "OK"
  });

  GiphyApiService.getTrendingDataRequest().then(value => {
    done();
    expect(value).toEqual({ id: "test" });
  });
});

it("getSearchTermDataRequest should return response body", done => {
  fetch.mockResponseOnce(JSON.stringify({ id: "test" }), {
    status: 200,
    statusText: "OK"
  });

  GiphyApiService.getSearchTermDataRequest().then(value => {
    done();
    expect(value).toEqual({ id: "test" });
  });
});
