import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import gif from '../../actions/gif'
import React from 'react'

export const Gif = ({ src, alt, onClick, className, gif, favorite }) => {
    return <img alt={alt} src={src} onClick={onClick.bind(null, gif)} className={ favorite ? `${className} favorite` : className } />
}


const mapDispatchToProps = dispatch => {
    /**
     *
     */
    const { creators: { clickGif: onClick } } = gif
    /**
     *
     */
    return bindActionCreators({ onClick }, dispatch)
}

export default connect(null, mapDispatchToProps)(Gif)