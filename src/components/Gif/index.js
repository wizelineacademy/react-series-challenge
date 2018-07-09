import favorites from '../../actions/favorites'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import React from 'react'
import './index.css'

const Gif = ({ url, slug, onClick, gif }) => {
    return <img className="gif" src={url} alt={slug} onClick={onClick.bind(null, gif)} />
}

const mapDispatchToProps = (dispatch) => {
    /**
     * 
     */
    const { clickFavorite: onClick } = favorites.creators
    /**
     * 
     */
    return bindActionCreators({ onClick }, dispatch)
}

export default connect(null, mapDispatchToProps)(Gif)