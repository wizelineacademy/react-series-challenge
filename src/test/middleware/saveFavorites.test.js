import saveFavoritesMiddleware from '../../middleware/saveFavorites';
import store from '../../store';
import actions from "../../actions";
import { mockGif } from "../mocks";

const { TOGGLE_FAVORITES } = actions.types;

const next = jest.fn();

describe('saveFavorites middleware', () => {
  
  it('TOGGLE_FAVORITES action calls localStorage.setItem', () => {
    const localStorage = {
      setItem: jest.fn()
    }
    let action = {
      type: TOGGLE_FAVORITES,
      payload: {
        id: 'id',
        gif: mockGif
      }
    }
    saveFavoritesMiddleware(action)(next)(store);
    expect(localStorage.setItem).toHaveBeenCalled();
  })

  it('Other actions should not call localStorage.setItem', () => {
    const localStorage = {
      setItem: jest.fn()
    }
    let action = {
      type: 'SOME_ACTION',
      payload: {
        id: 'id',
        gif: mockGif
      }
    }
    saveFavoritesMiddleware(action)(next)(store);
    expect(localStorage.setItem).not.toHaveBeenCalled();
  });

})

