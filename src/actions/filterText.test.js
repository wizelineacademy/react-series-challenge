import filterText from './filterText';

describe('filterText creators', () => {
  const { FILTER_TRENDING_TEXT_UPDATE } = filterText.types;
  const { updateFilterTrendingText } = filterText.creators;

  it('exposes a correct updateFilterTrendingText action creator', () => {
    const param = {
      payload: {
        foo: '',
      },
    };
    const expectedAction = {
      type: FILTER_TRENDING_TEXT_UPDATE,
      payload: {
        foo: '',
      },
    };
    expect(updateFilterTrendingText(param)).toEqual(expectedAction);
  });
});
