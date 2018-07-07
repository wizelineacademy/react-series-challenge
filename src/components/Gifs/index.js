import { connect } from 'react-redux';
import React from 'react'
import Gif from '../Gif'
import './index.css'

const Gifs = ({ gifs }) => {
    if (gifs && gifs.length) {
        const images = gifs.map(gif => <Gif key={gif.id} url={gif.images.downsized.url} slug={gif.title} />)
        return (
            <section className="gifs" >
                {images}
            </section>
        )
    } else {
        return (
            <section className="empty" >
                <img className="gif" src="https://media0.giphy.com/media/MJTOHmGiGPHgI/giphy-downsized.gif" alt="SEARCH FOR SOMETHING"/>
            </section>
        )
    }
}

const mapStateToProps = (state) => {
    const { search: {gifs} } = state
    return { gifs }
}

export default connect(mapStateToProps, null)(Gifs)  