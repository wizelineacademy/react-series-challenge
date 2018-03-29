// Dangerous params, this shouldn't be here.
const API_KEY = 'api_key=OKx61MhM7wizGoKbk4z3GuDlN1LOAJxu';
const lim = 15;
const limit = '&limit=15';
const url = `http://api.giphy.com/v1/gifs/`;
export const get = uri => fetch(uri).then(resp => resp.json());

export const getData = (dataParams) => {
  const { page, endpoint, search } = dataParams;
  const offset = `offset=${(page - 1) * lim}`
  const query = `${offset}${endpoint === 'search' ? `&q=${search}` : ''}`;
  const fetchUrl = `${url}${endpoint}?${API_KEY}&${query}${limit}`;
  return fetch(fetchUrl).then(resp => resp.json);
}

export const markFavorites = (elems, favs) => {
  return elems.map((item) => {
    return favs.findIndex((fav) => fav.id === item.id) > -1 ? { ...item, favorite: true } : { ...item, favorite: false };
  })
}

export const getPaginator = (page, totalElements) => {
  const totalPages = Math.ceil(totalElements / lim);

  const paginator = {
    totalPages,
    currentPage: page,
    nextPage: (page + 1) < totalPages ? (page + 1) : totalPages,
    prevPage: (page - 1) > 1 ? (page - 1) : 1,
  }

  return paginator;
}

export default {
  get,
  getData,
  markFavorites,
  getPaginator
}