import {GIPHY_API_KEY, APPLICATION_LOCAL_STORAGE_KEY} from '../config/config';

describe('Config values', () => {
  it('Validate GIPHY_API_KEY value', () => {
    expect(GIPHY_API_KEY).toEqual('9yXE88R1EADTESUaTosv5QvJXcRgB9pC');
  });

  it('Validate APPLICATION_LOCAL_STORAGE_KEY value', () => {
    expect(APPLICATION_LOCAL_STORAGE_KEY).toEqual('_giphyClientWizeline');
  });
});
