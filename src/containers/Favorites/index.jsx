import { connect } from 'react-redux'

import Home from '../../components/Home'

import { changeSearchBar, favoriteFetchInitialGifs, favoriteSearchKeyword } from '../../actions'

const mapStateToProps = ({ searchBar, favorites }) => ({
  searchValue: searchBar.value,
  giphies: favorites.giphies,
  keywordFilter: favorites.keyword
})

const mapDispatchToProps = dispatch => ({
  onSearchChange: event => dispatch(changeSearchBar(event.target.value)),
  onSearchSubmit: event => {
    event.preventDefault()
    dispatch(favoriteSearchKeyword(event.target.search.value))
  },
  initialSetup: () => dispatch(favoriteFetchInitialGifs())
})

const FavoriteContainer = connect(mapStateToProps, mapDispatchToProps)(Home)

export default FavoriteContainer
