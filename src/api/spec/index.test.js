import { searchGifs, getTrendingGifs, getGifById } from "../";

describe("API", () => {
  beforeAll(() => {
    process.env.REACT_APP_API_KEY = "secret";
  });

  it("returns a single gif", async () => {
    const expectedResponse = { id: 1 };
    fetch.mockResponse(JSON.stringify(expectedResponse));
    const config = { id: 1 };
    const response = await getGifById(config);
    expect(response).toEqual(expectedResponse);
  });

  it("returns the trending gifs", async () => {
    const expectedResponse = [{ id: 1 }, { id: 2 }];
    fetch.mockResponse(JSON.stringify(expectedResponse));
    const config = {};
    const response = await getTrendingGifs(config);
    expect(response).toEqual(expectedResponse);
  });

  it("returns matched gifs on search", async () => {
    const expectedResponse = [{ id: 1 }];
    fetch.mockResponse(JSON.stringify(expectedResponse));
    const config = { q: "dog" };
    const response = await searchGifs(config);
    expect(response).toEqual(expectedResponse);
  });
});
