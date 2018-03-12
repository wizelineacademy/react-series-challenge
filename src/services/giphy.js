
//const API_URL = process.env.API_URL;
const API_URL = 'http://api.giphy.com/v1/gifs'
export default {

  getDefaultOptions (url) {
    return {
      url: API_URL + url
    };
  },

  get (url) {
    const reqUrl = this.getDefaultOptions(url);
    const options = {}
    options['method'] = 'GET';
    options['headers'] = {
      'content-type': 'application/json'
    }
    
    return fetch(reqUrl.url,options);
  },

};


// fetch(`${ENDPOINT}/?results=${NUSERS}`, { method: 'GET'})
// .then((response) => response.json())
// .then(({ results }) => {
//   this.setState({ users: results});
// });