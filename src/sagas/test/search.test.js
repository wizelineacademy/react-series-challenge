import { cloneableGenerator } from 'redux-saga/utils'
import { loadSearchGif, loadSearchFavorites, loadSearchGifs} from '../search'
import searchActions from '../../actions/search'

describe('favorite sagas', () => {
  it('loadSearchGif', () => {
    const gen = cloneableGenerator(loadSearchGifs)(searchActions.creators.requestSearchGifs())
    gen.next()
  })
  it('search favorites', () => {
    const gen = cloneableGenerator(loadSearchFavorites)(searchActions.creators.searchFavs())
    gen.next()
  })
  it('search gif', () => {
    const gen = cloneableGenerator(loadSearchGif)(searchActions.creators.searchGif())
    gen.next()
  })

})
