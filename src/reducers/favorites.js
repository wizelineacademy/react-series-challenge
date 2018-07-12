import FavReducer from "../../Containers/FavPage/reducer";
import {WITHDRAW_FAV,ADD_FAV} from "../../Containers/FavPage/action";

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
      const curState = {
        favGifs:[
          2,
        ]
      }
      const action = {
        type: ADD_FAV,
        params:1
      }
      const nextState = FavReducer(curState, action)
      expect(nextState).toEqual({"favGifs": [2, 1]})
    })
  
    it('WITHDRAW_FAV action works', () => {
      const curState = {
        favGifs:[
          {
            id:2
          },
          {
            id:1
          }
        ]
      }
      const action = {
        type: WITHDRAW_FAV,
        id:1
      }
      const nextState = FavReducer(curState, action)
      expect(nextState).toEqual({favGifs:[{id:2}]})
    })
  })