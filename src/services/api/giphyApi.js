const giphyApiKey = process.env.REACT_APP_GIPHY_API_KEY;
const apiUrl = process.env.REACT_APP_API_URL;

const GiphyApiService = {
  getTrendingDataRequest() {
    const path = "/v1/gifs/trending";
    return fetch(apiUrl + path + `?api_key=${giphyApiKey}`).then(response =>
      response.json()
    );
  }
};

export default GiphyApiService;
