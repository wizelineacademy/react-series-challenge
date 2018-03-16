const HOST = 'http://api.giphy.com/v1/gifs/';
const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

const get = path => fetch(`${HOST}${path}&api_key=${API_KEY}`)
  .then(response => response.json())
  .then((data) => data.data);

export default get;
