const API_KEY_GIPHY = 'FalKCfLXRYrRZUEJD8lkMlgBT8i3AHEO';

const Giphy = {
  getById(id) {
    const initObject = {
      method: 'GET',
    };
    const query = `api_key=${API_KEY_GIPHY}`;
    return fetch(`http://api.giphy.com/v1/gifs/${id}?${query}`, initObject);
  },
  getTrending() {
    const initObject = {
      method: 'GET',
    };
    const query = `api_key=${API_KEY_GIPHY}&limit=36`;
    return fetch(`http://api.giphy.com/v1/gifs/trending?${query}`, initObject);
  },
  getGifsSearch(text) {
    console.log(text);
    const initObject = {
      method: 'GET',
    };
    const query = `api_key=${API_KEY_GIPHY}&q=${text}&limit=36`;
    return fetch(`http://api.giphy.com/v1/gifs/search?${query}`, initObject);
  }
}

export default Giphy;
