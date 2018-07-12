import HomeReducer from "../../reducers";
import {QUERY_TRENDING,QUERY_TRENDING_SUCCESS,QUERY_TRENDING_ERROR} from "../../actions/home";

describe('Reducer for HOME works', () => {
    it('returns correct initial state', () => {
      expect(HomeReducer(undefined, {})).toEqual({
        trendingGifs: [],
        trendingLoading: true
      })
    })
  
    it('returns current state if no action matched', () => {
      const curState =  {
        trendingGifs: [1,2,3],
        trendingLoading: true
      }
      const nextState = HomeReducer(curState, {})
      expect(nextState).toEqual(curState) // compare pointers
      expect(nextState).toEqual(curState) // compare values
    })
  
    it('QUERY_TRENDING_SUCCESS action works', () => {
      const curState = {}
      const action = {
        type: QUERY_TRENDING_SUCCESS,
        data: "information",
        pagination:false
      }
      const nextState = HomeReducer(curState, action)
      const expectedState = {trendingLoading:false,trendingGifs:undefined}
      expect(nextState).toEqual(expectedState)
      expect(nextState).not.toEqual(curState)
    })
  
    it('QUERY_TRENDING action works', () => {
      const curState = {}
      const action = {
        type: QUERY_TRENDING
      }
      const nextState = HomeReducer(curState, action)
      expect(nextState).toEqual({trendingLoading:true})
      expect(nextState).not.toEqual(curState)
    })

    it('QUERY_TRENDING_ERROR action works', () => {
        const curState = {}
        const action = {
          type: QUERY_TRENDING_ERROR
        }
        const nextState = HomeReducer(curState, action)
        expect(nextState).toEqual({trendingGifs:null, trendingLoading:false})
        expect(nextState).not.toEqual(curState)
      })
  })