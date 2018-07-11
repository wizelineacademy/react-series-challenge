import FavReducer from "../../../Containers/FavPage/reducer"
import {ADD_FAV,WITHDRAW_FAV} from "../../../Containers/FavPage/action"

describe('FavReducer works', () => {
    it('returns correct initial state', () => {
      expect(FavReducer(undefined, {})).toEqual({
        favGifs: [],
        favLoading: true
      })
    })
  
    it('returns current state if no action matched', () => {
      const curState =  {
        favGifs: [2,3],
        favLoading: true
      }
      const nextState = FavReducer(curState, {})
      expect(nextState).toBe(curState) // compare pointers
      expect(nextState).toEqual(curState) // compare values
    })
  
    it('adds favs when receiving ADD_FAV action', () => {
      const curState = {
        favGifs: [2,3],
        favLoading: true
      }
      const action = {
        type: ADD_FAV,
        params: 4,
      }
      const nextState = FavReducer(curState, action)
      const expectedState = {
        favGifs: [2,3,4],
        favLoading: true
      }
      expect(nextState).toEqual(expectedState)
      expect(nextState).not.toBe(curState)
    })
  
    it('delete from fav when WITHDRAW_FAV action', () => {
      const curState = {favGifs:[
        { id: 1},
        {id:2}
      ]
    }
      const action = {
        type: WITHDRAW_FAV,
        id: 1
      }
      const nextState = FavReducer(curState, action)
      expect(nextState).toEqual([{id:2}])
      expect(nextState).not.toBe(curState)
    })
  })