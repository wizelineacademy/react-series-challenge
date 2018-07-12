import FavReducer from "../../../Containers/FavPage/reducer"
import {WITHDRAW_FAV,ADD_FAV} from "../../../Containers/FavPage/action"

describe('FavReducer works', () => {
    it('returns correct initial state', () => {
      expect(FavReducer(undefined, {})).toEqual({
        favGifs: [],
        favLoading: true
      })
    })
  
    it('returns current state if no action matched', () => {
      const curState =  {
        favGifs: [1,2,3],
        favLoading: true
      }
      const nextState = FavReducer(curState, {})
      expect(nextState).toEqual(curState) // compare pointers
      expect(nextState).toEqual(curState) // compare values
    })
  
    it('ADD_FAV action works', () => {
      const curState = {}
      const action = {
        type: ADD_FAV,
        data: "information",
        pagination:false
      }
      const nextState = FavReducer(curState, action)
      const expectedState = {favLoading:false,favGifs:undefined}
      expect(nextState).toEqual(expectedState)
      expect(nextState).not.toEqual(curState)
    })
  
    it('WITHDRAW_FAV action works', () => {
      const curState = {}
      const action = {
        type: WITHDRAW_FAV
      }
      const nextState = FavReducer(curState, action)
      expect(nextState).toEqual({favLoading:true})
      expect(nextState).not.toEqual(curState)
    })
  })