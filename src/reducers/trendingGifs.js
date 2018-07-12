import trendingGifsActions from "../actions/trendingGifs";

//localStorage
let trendingGifs = localStorage.getItem("trendingGifs");
let searchGifs = localStorage.getItem("searchGifs");
let favs = localStorage.getItem("favs");

if (trendingGifs === null) {
  trendingGifs = [];
} else {
  trendingGifs = JSON.parse(trendingGifs);
}
if (searchGifs === null) {
  searchGifs = [];
} else {
  searchGifs = JSON.parse(searchGifs);
}
if (favs === null) {
  favs = [];
} else {
  favs = JSON.parse(favs);
}

const initialState = {
  trendingGifs: [],
  searchGifs: [],
  favs: favs,
  query: ""
};

const trendingGifsReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case trendingGifsActions.types.TRENDING_GIFS_FETCHED: {
      let trendingGifs = [];
      payload.data.data.forEach(function(item, index) {
        trendingGifs.push({
          id: item.id,
          url: item.images["original"].url,
          fav: false,
          title: item.title
        });
      });
      const newState = {
        searchGifs: [],
        trendingGifs: trendingGifs,
        query: "",
        favs: state.favs
      };
      setLocal(state);
      return newState;
    }
    case trendingGifsActions.types.SEARCH_GIFS_GET: {
      const newState = {
        searchGifs: [],
        trendingGifs: state.trendingGifs,
        query: payload,
        favs: state.favs
      };
      setLocal(state);
      return newState;
    }

    case trendingGifsActions.types.SEARCH_GIFS_FETCHED: {
      let searchGifs = [];
      payload.data.data.forEach(function(item, index) {
        searchGifs.push({
          id: item.id,
          url: item.images["original"].url,
          fav: false,
          title: item.title
        });
      });
      const newState = {
        searchGifs: [],
        trendingGifs: searchGifs,
        query: "",
        favs: state.favs
      };
      setLocal(state);
      return newState;
    }
    case trendingGifsActions.types.ADD_FAV: {
      let objIndexTrending = state.trendingGifs.findIndex(
        obj => obj.id === payload
      );
      let objIndexSearch = state.searchGifs.findIndex(
        obj => obj.id === payload
      );
      let obj = {};
      if (objIndexTrending !== -1) {
        state.trendingGifs[objIndexTrending].fav = true;
        obj = state.trendingGifs.find(obj => obj.id === payload);
      } else if (objIndexSearch !== -1) {
        state.searchGifs[objIndexSearch].fav = true;
        obj = state.searchGifs.find(obj => obj.id === payload);
      }

      let objIndexFav = state.favs.findIndex(obj => obj.id === payload);
      if (objIndexFav === -1) {
        state.favs.push(obj);
      }
      const newState = {
        searchGifs: [],
        trendingGifs: state.trendingGifs,
        query: "",
        favs: state.favs
      };

      setLocal(state);

      return newState;
    }
    case trendingGifsActions.types.REMOVE_FAV: {
      let objIndexTrending = state.trendingGifs.findIndex(
        obj => obj.id === payload
      );
      let objIndexSearch = state.searchGifs.findIndex(
        obj => obj.id === payload
      );
      if (objIndexTrending !== -1) {
        state.trendingGifs[objIndexTrending].fav = false;
      }
      if (objIndexSearch !== -1) {
        state.searchGifs[objIndexSearch].fav = false;
        state.searchGifs.splice(objIndexSearch, 1);
      }

      let objIndexFav = state.favs.findIndex(obj => obj.id === payload);
      if (objIndexFav > -1) {
        state.favs.splice(objIndexFav, 1);
      }

      const newState = {
        searchGifs: state.searchGifs,
        trendingGifs: state.trendingGifs,
        query: "",
        favs: state.favs
      };
      setLocal(state);
      return newState;
    }

    case trendingGifsActions.types.SEARCH_GIFS_FAV: {
      let query = payload;
      let search = [];
      if (query !== "") {
        state.favs.forEach(function(item, index) {
          if (item.title.search(query) !== -1) search.push(item);
        });
      }
      const newState = {
        searchGifs: search,
        trendingGifs: state.trendingGifs,
        query: payload,
        favs: state.favs
      };
      return newState;
    }
    default:
      return state;
  }
};

function setLocal(state) {
  localStorage.setItem("trendingGifs", JSON.stringify(state.trendingGifs));
  localStorage.setItem("searchGifs", JSON.stringify(state.searchGifs));
  localStorage.setItem("favs", JSON.stringify(state.favs));
}

export default trendingGifsReducer;
