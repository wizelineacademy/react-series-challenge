import { app, initialState } from '../../redux/reducers/app';
import {
  BEGIN_GET_GIFS_TRENDING_GIFS,
  SUCCESS_GET_GIFS_TRENDING_GIFS,
  ERROR_GET_GIFS_TRENDING_GIFS,
  BEGIN_SEARCH_GIF_API,
  SUCCESS_SEARCH_GIF_API,
  ERROR_SEARCH_GIF_API,
  HANDLE_FAVORITE_CHANGE,
  SET_NEW_STATUS_FAVORITES
} from '../../redux/types';

let doAction = type => {
  return { type };
};

const initialStateClean = () => Object.assign({}, initialState);

describe('App Reducer', () => {
  it('Should return an empty array of gifs', () => {
    let reportsState = app(initialStateClean(), doAction(BEGIN_GET_GIFS_TRENDING_GIFS));
    expect(reportsState.gifs).toEqual([]);
  });

  it('Should add a new gifs to the state', () => {
    let type = SUCCESS_GET_GIFS_TRENDING_GIFS;
    let gifs = [{ id: 1 }, { id: 2 }];
    let firstState = initialStateClean();

    let appState = app(firstState, { type, gifs });

    expect(appState.gifs).not.toEqual(firstState.gifs);
  });

  it('Should add a new error to the state', () => {
    let type = ERROR_GET_GIFS_TRENDING_GIFS;
    let error = { message: 'Something bad happened' };

    let appState = app(initialStateClean(), { type, error });

    expect(appState.error).not.toEqual(initialStateClean().error);
  });

  it('Should return the same state', () => {
    let appState = app(initialStateClean(), doAction(BEGIN_SEARCH_GIF_API));

    expect(appState).toEqual(initialStateClean());
  });

  it('Should change the previous gifs for the ones found', () => {
    let type = SUCCESS_SEARCH_GIF_API;
    let firstState = initialStateClean();
    firstState.gifs = [{ id: 1 }, { id: 2 }];
    let newGifs = [{ id: 3 }, { id: 4 }, { id: 5 }];

    let appState = app(firstState, { type, gifs: newGifs });

    expect(appState.gifs).not.toEqual(firstState.gifs);
  });

  it('Should change the previous gifs for the ones found', () => {
    let type = SUCCESS_SEARCH_GIF_API;
    let firstState = initialStateClean();
    firstState.gifs = [{ id: 1 }, { id: 2 }];
    let newGifs = [{ id: 3 }, { id: 4 }, { id: 5 }];

    let appState = app(firstState, { type, gifs: newGifs });

    expect(appState.gifs).not.toEqual(firstState.gifs);
  });

  it('Should add a new error to the state when search failed', () => {
    let type = ERROR_SEARCH_GIF_API;
    let error = { message: 'Something bad happened' };

    let appState = app(initialStateClean(), { type, error });

    expect(appState.error).not.toEqual(initialStateClean().error);
  });

  it('Should update the favorite gifs', () => {
    let type = SET_NEW_STATUS_FAVORITES;
    let firstState = initialStateClean();
    let newFavorites = ['asdasdasd'];

    let appState = app(firstState, { type, favorites: newFavorites });

    expect(appState.favoriteGifs).not.toEqual(firstState.favoriteGifs);
  });
});
