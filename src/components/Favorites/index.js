import favorites from '../../actions/favorites';
import { Title, Gif, Gifs, FavoritesStyled } from './favorites.style'
import SearchBar from './favoritesSearchBar'
import React, { Component } from 'react'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'

const search = (items, filter) => items.filter(item => Object.values(item).some(value => String(value).toLowerCase().includes(filter.toLowerCase())))

class Favorites extends Component {
    componentWillMount() {
        const { getFavorites } = this.props
        getFavorites()
    }

    render() {
        /**
         * 
         */
        const gifs = this.props.items.map(gif => <Gif favorite key={gif.id} gif={gif} src={gif.images.downsized.url} alt={gif.title} />)
        /**
         * 
         */
        return (
            <FavoritesStyled>
                <Title> Favorites </Title>
                <SearchBar> Search for a Gif in your favorites </SearchBar>
                <Gifs>
                    { gifs }
                </Gifs>
            </FavoritesStyled>
        )
    }
}

const mapStateToProps = ({ favorites: { items, filter } }) => {
    return { items: search(items, filter) }
}

const mapDispatchToProps = dispatch => {
    /**
     *
     */
    const { creators: { getFavorites } } = favorites
    /**
     *
     */
    return bindActionCreators({ getFavorites }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Favorites)
