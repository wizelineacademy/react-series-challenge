import selectors from '../selectors'

it('test selector', () => {
    const state = {
        favorites: { data: 'test'}
    }
    const fk= selectors.favorites(state)
    expect(fk).toEqual({ data: 'test'});
});