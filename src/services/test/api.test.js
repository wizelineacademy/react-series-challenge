import { getTrending, getSearch, getGif } from '../api'

describe('API TESTS',() => {
  it("returns a single gif", async () => {
    const expected = { id:1 }
    fetch.mockResponse(JSON.stringify(expected))
    const response = await getGif(1);
    expect(response).toEqual(expected);
  });
  it("returns trending gifs", async () => {
    const expected = [{ id:1 },{ id:2 }]
    fetch.mockResponse(JSON.stringify(expected))
    const response = await getTrending();
    expect(response).toEqual(expected);
  });
  it("returns search gifs", async () => {
    const expected = [{ id:1 },{ id:2 }]
    const response = await getSearch('cat');
    expect(response).toEqual(expected);
  });

})
