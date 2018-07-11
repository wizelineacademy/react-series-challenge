
const API_URL = "http://api.giphy.com";
const API_TRENDS = "/v1/gifs/trending";
const API_SEARCH = "/v1/gifs/search";
const API_KEY = "MKGAXNQl5cXUBSBMrXSsufVZ9bqvhX6p"

const getDataTrend = async() => {
    try{
        const response = await fetch(`${API_URL}${API_TRENDS}?api_key=${API_KEY}`)
        const data = await response.json();
        return data;
    } catch(e) {
        console.log(e);
    }
}

const getDataSearch = async(value) => {
    try{
        const response = await fetch(`${API_URL}${API_SEARCH}?api_key=${API_KEY}&q=${value}`)
        const data = await response.json();
        return data;
    } catch(e) {
        console.log(e);
    }
}

export {
  getDataTrend, 
  getDataSearch,
};