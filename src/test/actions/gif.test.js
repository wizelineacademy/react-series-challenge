import gif from '../../actions/gif'

const { types: { GIF_CLICK }, creators: { clickGif } } = gif

describe('Gif Action, Types and Creators', () => {

    test('Should return a gif click action', () => {
        expect(clickGif()).toMatchObject({ type: GIF_CLICK });
    })

});