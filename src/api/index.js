import { fetcher } from './helpers';

export const fetchTrending = () => {
  return fetcher('/gifs/trending');
}

export const searchGifs = (query) => {
  return fetcher('/gifs/search', {
    queryParams: {
      q: window.encodeURIComponent(window.decodeURIComponent(query))
    }
  });
}
