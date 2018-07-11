import { SearchBarStyled } from './home.style'
import search from '../../actions/search'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'

const mapDispatchToProps = dispatch => {
    /**
     *
     */
    const { creators: { getSearch: onInput } } = search
    /**
     *
     */
    return bindActionCreators({ onInput }, dispatch)
}

export default connect(null, mapDispatchToProps)(SearchBarStyled)