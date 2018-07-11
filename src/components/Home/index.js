import { bindActionCreators } from 'redux';
import search from '../../actions/search';
import React, { Component } from 'react'
import SearchBar from './homeSearchBar'
import { connect } from 'react-redux'
import { Title, HomeStyled, GifStyled, Gifs } from './home.style'

class Home extends Component {

    render() {
        const isFavorite = gif => this.props.favorites.some(favorite => favorite.id === gif.id)
        const gifs = this.props.search.map(gif => <GifStyled favorite={isFavorite(gif)} key={gif.id} gif={gif} src={gif.images.downsized.url} alt={gif.title} />)

        return (
            <HomeStyled>
                <Title> Home </Title>
                <SearchBar> Search for Gifs </SearchBar>
                <Gifs>
                    { gifs }
                </Gifs>
            </HomeStyled>
        )
    }
}

const mapStateToProps = ({ search, favorites: { items: favorites } }) => {
    return { search, favorites }
}

const mapDispatchToProps = dispatch => {
    /**
     *
     */
    const { creators: { getSearch } } = search
    /**
     *
     */
    return bindActionCreators({ getSearch }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
