import {
  selectedGifChange,
  SELECTED_GIF_CHANGE,
  selectedGifRemove,
  SELECTED_GIF_REMOVE,
  selectedGifRequestInfo,
  SELECTED_GIF_REQUEST_INFO
} from '../../actions/selected';

describe('selected action creators', () => {
  describe('selectedGifChange', () => {
    it(`should return action with type ${SELECTED_GIF_CHANGE}`, () => {
      const expected = { type: SELECTED_GIF_CHANGE };
      expect(selectedGifChange()).toEqual(expected);
    });

    it(`should return action with gif object as a payload`, () => {
      const gif = { id: 1, image: 'foo' };
      const expected = {
        type: SELECTED_GIF_CHANGE,
        payload: gif
      };

      expect(selectedGifChange(gif)).toEqual(expected);
    });
  });

  describe('selectedGifRemove', () => {
    it(`should return action with type ${SELECTED_GIF_REMOVE}`, () => {
      const expected = { type: SELECTED_GIF_REMOVE };
      expect(selectedGifRemove()).toEqual(expected);
    });
  });

  describe('selectedGifRequestInfo', () => {
    it(`should return action with type ${SELECTED_GIF_REQUEST_INFO}`, () => {
      const expected = { type: SELECTED_GIF_REQUEST_INFO };
      expect(selectedGifRequestInfo()).toEqual(expected);
    });

    it(`should return action gifId as a payload`, () => {
      const gifId = 'asd12elknas';
      const expected = {
        type: SELECTED_GIF_REQUEST_INFO,
        payload: gifId
      };

      expect(selectedGifRequestInfo(gifId)).toEqual(expected);
    });
  });
});
