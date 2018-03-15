import giphyApi from '../../src/apis/giphy';


describe('Giphy Api tests', function () {

  test('Favorites request works', async () => {
    global.fetch = jest.fn().mockImplementation((url) => {
      var p = new Promise((resolve, reject) => {
        resolve({
          urlRequested: url, 
        });
      });

      return p;
  });
  let result = await giphyApi.trending()
    expect(result.urlRequested).toEqual("http://api.giphy.com/v1/gifs/trending?api_key=yD4ObTf7LP9vO8V7jW1mlWbB86ZiKNUu")
  })

  test('Search request works', async () => {
    global.fetch = jest.fn().mockImplementation((url) => {
      var p = new Promise((resolve, reject) => {
        resolve({
          urlRequested: url, 
        });
      });

      return p;
  });
  let result = await giphyApi.search('myterm')
    expect(result.urlRequested).toEqual("http://api.giphy.com/v1/gifs/search?api_key=yD4ObTf7LP9vO8V7jW1mlWbB86ZiKNUu&q=myterm")
  })

  test('Get by ID request works', async () => {
    global.fetch = jest.fn().mockImplementation((url) => {
      var p = new Promise((resolve, reject) => {
        resolve({
          urlRequested: url, 
        });
      });

      return p;
  });
  let result = await giphyApi.fetchGiphy('DummyID')
    expect(result.urlRequested).toEqual("http://api.giphy.com/v1/gifs/DummyID?api_key=yD4ObTf7LP9vO8V7jW1mlWbB86ZiKNUu")
  })


  test('Get only necessary fields ', async () => {
  const dummyGiphy = {
    bitly_gif_url :"https://gph.is/1aT78r2",
    id:"3oEduXtXta9onVDlIc",
    images: {
      preview_gif: 'myPreview',
      downsized_large: 'MyLargeImage',
      rand: 'stuff'
    },
    rating: "g",
    title :"sad dog GIF by The BarkPost "
  }
  let result = giphyApi.mapDataToFields(dummyGiphy);
    expect(result).toEqual({
      isFav: false,
      id:"3oEduXtXta9onVDlIc",
      images: {
        preview_gif: 'myPreview',
        downsized_large: 'MyLargeImage'
      },
      title :"sad dog GIF by The BarkPost "
    })
  })
  

});