const giphyApiKey = process.env.REACT_APP_GIPHY_API_KEY;
const apiUrl = process.env.REACT_APP_API_URL;

const GiphyApiService = {
  getTrendingDataRequest() {
    const path = "/v1/gifs/trending";
    return fetch(apiUrl + path + `?api_key=${giphyApiKey}`).then(response =>
      response.json()
    );
  },
  getSearchTermDataRequest(data) {
    const path = "/v1/gifs/search";
    data = data !== undefined && data.trim() !== "" ? data : "lolcats";
    const params = `&q=${data}&limit=25&offset=0&rating=G&lang=en`;

    return fetch(apiUrl + path + `?api_key=${giphyApiKey}` + params).then(
      response => response.json()
    );
  }
};

export default GiphyApiService;
