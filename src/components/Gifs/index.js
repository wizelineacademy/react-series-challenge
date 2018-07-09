import location from '../../actions/location'
import { bindActionCreators } from 'redux';
import React, { Component } from 'react'
import { connect } from 'react-redux';
import Loading from '../Loading';
import Gif from '../Gif'
import './index.css'

class Gifs extends Component {

    constructor(props) {
        super(props)
    }

    componentWillReceiveProps(nextProps) {
        /**
         * 
         */
        if (nextProps.location.pathname !== this.props.location.pathname) {
            this.props.onComponentWillReceiveProps(nextProps.location)
        }
    }

    isInFavorites(gif) {
        return this.props.favorites.some(fav => fav.id === gif.id)
    }

    render() {
        const content = this.props.gifs && this.props.gifs.length 
            ? this.props.gifs.map( gif => <Gif key={gif.id} url={gif.images.downsized.url} slug={gif.title} gif={gif} favorite={this.isInFavorites(gif)} /> )
            : <Loading />

        return (
            <section className={ this.props.gifs.length ? 'gifs' : 'empty' } >
                { content }
            </section>
        )
    }
} 

const mapStateToProps = (state) => {
    const { search:{ gifs }, favorites: { items: favorites }} = state
    return { gifs, loading: Boolean(gifs), favorites }
}

const mapDispatchToProps = (dispatch) => {
    const { getLocation: onComponentWillReceiveProps } = location.creators

    return bindActionCreators({ onComponentWillReceiveProps }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Gifs)  