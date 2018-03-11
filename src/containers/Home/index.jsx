import { connect } from 'react-redux'

import Home from '../../components/Home'
import { changeSearchBar, homeFetchInitialGifs } from '../../actions'

const mapStateToProps = ({ searchBar, grid, home }) => ({
  searchValue: searchBar.value,
  giphies: home.giphies
})

const mapDispatchToProps = dispatch => ({
  onSearchChange: event => dispatch(changeSearchBar(event.target.value)),
  initialSetup: () => dispatch(homeFetchInitialGifs())
})

const HomeContainer = connect(mapStateToProps, mapDispatchToProps)(Home)

export default HomeContainer
