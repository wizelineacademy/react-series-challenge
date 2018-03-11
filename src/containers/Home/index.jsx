import { connect } from 'react-redux'

import Home from '../../components/Home'
import { changeSearchBar, homeFetchInitialGifs, homeFetchSearchGifs } from '../../actions'

const mapStateToProps = ({ searchBar, grid, home }) => ({
  searchValue: searchBar.value,
  giphies: home.giphies
})

const mapDispatchToProps = dispatch => ({
  onSearchChange: event => {
    const query = event.target.value
    dispatch(changeSearchBar(query))
    if (query !== '') {
      dispatch(homeFetchSearchGifs(query))
    } else {
      dispatch(homeFetchInitialGifs())
    }

  },
  initialSetup: () => dispatch(homeFetchInitialGifs())
})

const HomeContainer = connect(mapStateToProps, mapDispatchToProps)(Home)

export default HomeContainer
