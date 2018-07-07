import favorites from '../../actions/favorites'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import React from 'react'
import './index.css'

const Gif = ({ url, slug, onClick }) => {
    return <img className="gif" src={url} alt={slug} onClick={onClick} />
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