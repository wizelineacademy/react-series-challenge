import axios from "axios";
const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

const api = {
  trending: () => {
    const URL = `https://api.giphy.com/v1/gifs/trending?api_key=${API_KEY}&limit=25&rating=G`;
    return axios.get(URL).then(response => {
      console.log("response", response);
      return response.data.data;
    });
  }
};

export default api;
