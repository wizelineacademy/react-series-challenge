import get from "../giphyAPI";

describe('giphyAPI', () => {
  beforeEach(() => {
    global.fetch = jest.fn().mockImplementation(() => {
      return new Promise((resolve, reject) => {
        resolve({
          data: {
            gifId: 1
          },
          json: () => {
            return {data: {gifId: 1}}
          }
        })
      });
    });
  });

  it('should return gifs', async () => {
    const response = await get('/trending?limit=80');
    expect(response.gifId).toBe(1);
  });
});
