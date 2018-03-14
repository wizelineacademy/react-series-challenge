import selected, { defaultState } from '../../src/reducers/selected';
import {
  selectedGifChange,
  SELECTED_GIF_CHANGE,
  selectedGifRemove,
  SELECTED_GIF_REMOVE,
  selectedGifRequestInfo,
  SELECTED_GIF_REQUEST_INFO
} from '../../src/actions/selected';

describe('selected reducer', () => {
  it('should return default state when given an unknown action', () => {
    const action = { type: 'FOO' };
    expect(selected(undefined, action)).toEqual(defaultState);
  });

  it('should return the same state when given an unknown action', () => {
    const state = {
      id: 1,
      image: 'foo.png'
    };
    const action = { type: 'FOO' };

    expect(selected(state, action)).toEqual(state);
  });

  describe(`for ${SELECTED_GIF_CHANGE} action`, () => {
    it('should set the state to the gif passed in as payload', () => {
      const gif = {
        id: 1,
        image: 'foo.png'
      };
      const expected = gif;

      expect(selected(defaultState, selectedGifChange(gif))).toEqual(expected);
    });
  });

  describe(`for ${SELECTED_GIF_REMOVE} action`, () => {
    it('should set the state to null', () => {
      const expected = null;

      expect(selected(defaultState, selectedGifRemove())).toEqual(expected);
    });
  });

  describe(`for ${SELECTED_GIF_REQUEST_INFO} action`, () => {
    it('should return an object with loading set to true', () => {
      const expected = { loading: true };
      expect(selected(defaultState, selectedGifRequestInfo('asdk123e'))).toEqual(expected);
    });
  });
});
