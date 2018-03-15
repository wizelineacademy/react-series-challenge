import {
  getSelectedGif
} from '../../selectors/selected';

const selected = { id: 1 };

const state = {
  selected
};

describe('selected selectors', () => {
  describe('getSelectedGif', () => {
    it('should get selected gif from state', () => {
      expect(getSelectedGif(state)).toEqual(selected);
    });
  });
});
