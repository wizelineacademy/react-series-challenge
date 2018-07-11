import { getDataTrend, getDataSearch } from "../api";

describe('api calls', () => {
  beforeEach(() => {
    //global.fetch = jest.fn().mockImplementation(() => Promise.resolve({gifs: [{ url: "http://image"}] }));
    global.fetch = jest.fn().mockImplementationOnce(() => {
        return new Promise((resolve, reject) => {
            resolve({
                ok: true,
                json: () => {
                return {gifs: 'http://image'};
                },
            });
        });
    });
  });

  test('should return trendy gifs', async function () {
    const response = await getDataTrend();
    expect(response.gifs).toBe('http://image');
  });
});

describe('api calls', () => {
    beforeEach(() => {
      //global.fetch = jest.fn().mockImplementation(() => Promise.resolve({gifs: [{ url: "http://image"}] }));
      global.fetch = jest.fn().mockImplementationOnce(() => {
          return new Promise((resolve, reject) => {
              resolve({
                  ok: true,
                  json: () => {
                  return {gifs: 'http://image'};
                  },
              });
          });
      });
    });
  
    test('should return trendy gifs', async function () {
      const response = await getDataSearch("Hello");
      expect(response.gifs).toBe('http://image');
    });
});