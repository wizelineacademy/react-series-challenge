/**
 * @jest-environment node
 */

import { getTrending, getSearch, getGif } from '../api'

describe('API TESTS',() => {
  it("returns a single gif", async () => {
    const response = await getGif(1);
    expect(response).toBeTruthy();
  });
  it("returns trending gifs", async () => {
    const response = await getTrending();
    expect(response).toBeTruthy();
  });
  it("returns trending gifs", async () => {
    const response = await getSearch('cat');
    expect(response).toBeTruthy();
  });

})
