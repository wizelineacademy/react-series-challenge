import * as giphy from '../../api/giphy';

describe("giphy api calls", () => {

  beforeEach(() => {
    global.fetch = jest.fn().mockImplementation(() => {
      var p = new Promise((resolve, reject) => {
        resolve({
          ok: true,
          Id: "123",
          json: function() {
            return {Id: '123'}
          }
        });
      });
      return p;
    });
  });

  it("loadTrending call", async () => {
    const response = await giphy.loadTrending();
    expect(response.Id).toEqual("123");
  });

  it('loadSearch call', async () => {
    const response = await giphy.loadSearch('happy');
    expect(response.Id).toEqual("123");
  });

});
