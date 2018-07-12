const GIF_CLICK = 'GIF_CLICK'

const clickGif = payload => ({ type: GIF_CLICK, payload })

export default {
    types: {
        GIF_CLICK
    },
    creators: {
        clickGif
    }
}