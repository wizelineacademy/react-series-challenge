import trending from '../../actions/trending'
import { bindActionCreators } from 'redux';
import { Title, Gifs, Gif } from './trending.style'
import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'

class Trending extends Component {

    componentWillMount() {
        const { getTrending } = this.props
        getTrending()
    }


    render() {
        /**
         * 
         */
        const isFavorite = gif => this.props.favorites.some(favorite => favorite.id === gif.id)
        const gifs = this.props.trending.map(gif => <Gif favorite={isFavorite(gif)} key={gif.id} gif={gif} src={gif.images.downsized.url} alt={gif.title} />)
        /**
         * 
         */
        return (
            <Fragment>
                <Title> Trending </Title>
                <Gifs>
                    { gifs }
                </Gifs>
            </Fragment>
        )
    }
}

const mapStateToProps = ({ trending, favorites: { items: favorites } }) => {
    return { trending, favorites }
}

const mapDispatchToProps = dispatch => {
    /**
     *
     */
    const { creators: { getTrending } } = trending
    /**
     *
     */
    return bindActionCreators({ getTrending }, dispatch)
}

export { Trending }
export default connect(mapStateToProps, mapDispatchToProps)(Trending)

