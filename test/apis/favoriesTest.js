import favoritesApi from '../../src/apis/favories';

describe('Favorites Api tests', function () {

  test('Favorites Load works', () => {
    localStorage.setItem('cc_giphy_favorites',JSON.stringify({ test : 'ok ' }));
    expect(favoritesApi.load()).toEqual({"test": "ok "})
  })

  test('Favorites Save works', () => {
    favoritesApi.save({ test : 'ok' });
    expect(localStorage.__STORE__['cc_giphy_favorites']).toEqual(JSON.stringify({ test : 'ok' }))
  })

  test('Favorites Search works', () => {
    const myArray = [
      { id: "X12345", title: 'hello' },
      { id: "B1234", title: 'bye' },
    ];
    let resultArray = favoritesApi.search(myArray,'hello')
    expect(resultArray.length).toEqual(1)
    expect(resultArray[0]).toEqual({"id": "X12345", "title": "hello"})
  })
});