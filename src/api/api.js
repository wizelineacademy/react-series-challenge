
const apiURL = "http://api.giphy.com";
const apiTrends = "/v1/gifs/trending";
const apiSearch = "/v1/gifs/search";
const apiKey = "MKGAXNQl5cXUBSBMrXSsufVZ9bqvhX6p"

const getDataTrend = async() => {
    try{
        const response = await fetch(`${apiURL}${apiTrends}?api_key=${apiKey}`)
        const data = await response.json();
        return data;
    } catch(e) {
        console.log(e);
    }
   
}

const getDataSearch = async(value) => {
    try{
        const response = await fetch(`${apiURL}${apiSearch}?api_key=${apiKey}&q=${value}`)
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