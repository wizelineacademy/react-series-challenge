import { connect } from 'react-redux'

import { favoriteClick } from '../../actions'
import GifItem from '../../components/GifItem'

const mapStateToProps = ({ favorites }) => ({
  favorites: favorites.favorites
})

const mapDispatchToProps = dispatch => ({
  onFavoriteClick: id => dispatch(favoriteClick(id))
})

const GifItemContainer = connect(mapStateToProps, mapDispatchToProps)(GifItem)

export default GifItemContainer
