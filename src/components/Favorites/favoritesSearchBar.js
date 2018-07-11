import { SearchBarStyled } from './favorites.style'
import favorites from '../../actions/favorites'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'

const mapDispatchToProps = dispatch => {
    /**
     *
     */
    const { creators: { searchFavorite: onInput } } = favorites
    /**
     *
     */
    return bindActionCreators({ onInput }, dispatch)
}

export default connect(null, mapDispatchToProps)(SearchBarStyled)