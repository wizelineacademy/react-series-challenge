import https from 'https';
import {
  BASE_URL,
  API_KEY
} from './config';

const getData = (endpoint, query) => {
  const q = query ? `&q=${query}` : '';
  return new Promise(resolve =>
    https.get(`${BASE_URL}/${endpoint}?api_key=${API_KEY}${q}`, res => {
      let data = '';

      res.on('data', (chunk) => { data += chunk; });
      res.on('end', () => {
        data = JSON.parse(data).data;
        resolve(data);
      });

    }).on("error", (err) => {
      console.log("Error: " + err);
    })
  );
}

const getTrending = () => getData('trending');

const getSearch = query => getData('search', query);

export {
  getTrending,
  getSearch
}
