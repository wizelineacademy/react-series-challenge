import SearchReducer from "../../../Containers/SearchPage/reducer"
import {QUERY_SEARCH,QUERY_SEARCH_SUCCESS,QUERY_SEARCH_ERROR} from "../../../Containers/SearchPage/action"

describe('SearchReducer works', () => {
    it('returns correct initial state', () => {
      expect(SearchReducer(undefined, {})).toEqual({
        searchGifs: [],
        searchLoading: true
      })
    })
  
    it('returns current state if no action matched', () => {
      const curState =  {
        searchGifs: [1,2,3],
        searchLoading: true
      }
      const nextState = SearchReducer(curState, {})
      expect(nextState).toBe(curState) // compare pointers
      expect(nextState).toEqual(curState) // compare values
    })
  
    it('QUERY_SEARCH_SUCCESS action works', () => {
      const curState = {}
      const action = {
        type: QUERY_SEARCH_SUCCESS,
        data: "information",
        pagination:false
      }
      const nextState = SearchReducer(curState, action)
      const expectedState = {searchLoading:false,searchGifs:"information"}
      expect(nextState).toEqual(expectedState)
      expect(nextState).not.toBe(curState)
    })
  
    it('QUERY_SEARCH action works', () => {
      const curState = {}
      const action = {
        type: QUERY_SEARCH
      }
      const nextState = SearchReducer(curState, action)
      expect(nextState).toEqual({searchLoading:true})
      expect(nextState).not.toBe(curState)
    })

    it('QUERY_SEARCH_ERROR action works', () => {
        const curState = {}
        const action = {
          type: QUERY_SEARCH_ERROR
        }
        const nextState = SearchReducer(curState, action)
        expect(nextState).toEqual({searchGifs:null, searchLoading:false})
        expect(nextState).not.toBe(curState)
      })
  })