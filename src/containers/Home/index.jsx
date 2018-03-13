import { connect } from 'react-redux'

import Home from '../../components/Home'
import { changeSearchBar, homeFetchInitialGifs, homeFetchSearchGifs } from '../../actions'

const mapStateToProps = ({ searchBar, home }) => ({
  searchValue: searchBar.value,
  giphies: home.giphies
})

const mapDispatchToProps = dispatch => ({
  onSearchChange: event => dispatch(changeSearchBar(event.target.value)),
  onSearchSubmit: event => {
    event.preventDefault()
    const query = event.target.search.value
    if (query === '') {
      dispatch(homeFetchInitialGifs())
    } else {
      dispatch(homeFetchSearchGifs(query))
    }
  },
  initialSetup: () => dispatch(homeFetchInitialGifs())
})

const HomeContainer = connect(mapStateToProps, mapDispatchToProps)(Home)

export default HomeContainer
